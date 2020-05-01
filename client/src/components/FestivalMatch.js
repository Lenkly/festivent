import styled from '@emotion/styled';
import React from 'react';
import CalcIcon from './CalcIcon';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 35px;
  align-self: center;
  justify-self: start;
  cursor: pointer;
`;

const Festival = styled.div`
  align-self: center;
  margin-left: 5px;
`;

const FestivalTitle = styled.p`
  font-size: 25px;
  margin: 0px;
  word-wrap: break-word;
  hyphens: auto;
`;
const FestivalInfo = styled.p`
  font-size: 12px;
  line-height: 1.3;
  margin: 3px 0;
`;

const selectedGenres = new Array(
  sessionStorage.getItem('SelectedGenres').split(',')
);
async function fetchFestivals() {
  const response = await fetch(
    '/api/festivals?genres_like' + selectedGenres.join('&genres_like=')
  );
  const festivals = await response.json();
  return festivals;
}

function FestivalMatch() {
  const history = useHistory();
  const { status, data: festivaldata } = useQuery('festivals', fetchFestivals);
  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return (
      <span>
        Oh no, something bad happened 😢 <br />
        Please try again.
      </span>
    );
  }

  const sameGenres = festivaldata.genres.filter((genre) =>
    selectedGenres.includes(genre)
  );
  const quote = (sameGenres.length / festivaldata.genres.length) * 100;

  const handleDetailsClick = () => {
    history.push('/Details');
  };
  return (
    <div>
      {festivaldata.map((festival) => (
        <Card key={festival.id} onClick={handleDetailsClick}>
          <CalcIcon color="perfect">{quote}</CalcIcon>
          <Festival>
            <FestivalTitle>{festival.name}</FestivalTitle>
            <FestivalInfo>
              {festival.venue}, {festival.place}
            </FestivalInfo>
          </Festival>
        </Card>
      ))}
    </div>
  );
}

export default FestivalMatch;