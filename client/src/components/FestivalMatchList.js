import styled from '@emotion/styled';
import React from 'react';
import CalcIcon from './CalcIcon';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import quota from '../lib/Quota';
import { fadeIn } from '../animation/fades';
import usePersistentState from '../hooks/usePersistentState';
import calculateIconValue from '../lib/calculateIconValue';
import Loading from './Loading';
import Error from './Error';

const CardContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-in-out forwards 0.5s;
  cursor: pointer;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 2.25rem;
  align-self: center;
  justify-self: start;
  cursor: pointer;
`;

const Festival = styled.div`
  align-self: center;
  margin-left: 5px;
`;

const FestivalTitle = styled.p`
  font-size: 1.5rem;
  margin: 0px;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
`;
const FestivalInfo = styled.p`
  font-size: 0.75rem;
  line-height: 1.5;
  margin: 3px 0;
`;

function compare(a, b) {
  if (a.quote > b.quote) {
    return -1;
  }
  if (a.quote < b.quote) {
    return 1;
  }

  return 0;
}

function FestivalMatchList() {
  const history = useHistory();
  let { status, data: festivaldata } = useQuery('festivals', getFestivals);
  const [selectedGenres] = usePersistentState('SelectedGenres', []);

  async function getFestivals() {
    const fetchRoute =
      '/api/festivals?genres_like=' + selectedGenres.join('&genres_like=');
    const response = await fetch(fetchRoute);
    const festivals = await response.json();
    return festivals;
  }
  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return <Error />;
  }
  const festivalGenres = festivaldata.reduce((newArray, festivalGenres) => {
    if (newArray.indexOf(festivalGenres.genres) === -1) {
      newArray.push(festivalGenres.genres);
    }
    return newArray;
  }, []);

  const quotes = quota(festivalGenres, selectedGenres);

  const handleDetailsClick = (event, festivalId, index) => {
    const selectedFestival = festivalId;
    sessionStorage.setItem('selectedFestival', selectedFestival);
    sessionStorage.setItem('selectedFestivalQuote', quotes[index]);

    history.push(`/festival/${selectedFestival}`); //should be the name
  };

  for (const [index] of quotes.entries()) {
    Object.defineProperty(festivaldata[index], 'quote', {
      value: quotes[index],
      writable: true,
    });
  }

  return (
    <div>
      <CardContainer>
        {festivaldata
          .sort((a, b) => compare(a, b))
          .map((festival, index) => (
            <Card
              key={festival.id}
              onClick={(event) => handleDetailsClick(event, festival.id, index)}
            >
              <CalcIcon color={calculateIconValue(festival.quote)}>
                {festival.quote}
              </CalcIcon>

              <Festival>
                <FestivalTitle>{festival.name}</FestivalTitle>
                <FestivalInfo>
                  {festival.venue}, {festival.place}
                </FestivalInfo>
              </Festival>
            </Card>
          ))}
      </CardContainer>
    </div>
  );
}

export default FestivalMatchList;
