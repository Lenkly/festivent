import React from 'react';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import ArtistButton from './ArtistButton';

const Festival = styled.div`
  padding-top: 210px;
  text-align: center;
  font-size: 34px;
  font-family: 'Quicksand Book';
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const FestivalDetail = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: 'Quicksand Book';
  margin-bottom: 30px;
  text-transform: uppercase;
`;

const FestivalIntroduction = styled.div`
  max-width: 600px;
  font-size: 12px;
  font-family: 'Quicksand Light';
  line-height: 1.3;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

const LineUp = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  margin-bottom: 20px;
  font-size: 12px;
  font-family: 'Quicksand Book';
  text-transform: uppercase;
  background: linear-gradient(
    145deg,
    #fff700,
    #ff9100,
    #ff0084,
    #ff00f2,
    #bb00ff,
    #7700ff,
    #006aff,
    #00ccff,
    #00ff6a,
    #59ff00,
    #fff700
  );
`;

async function fetchFestivals() {
  const response = await fetch('http://localhost:4000/api/festivals');
  const festivals = await response.json();
  return festivals;
}

function GetFestivals() {
  const { status, data: festivaldata, error } = useQuery(
    'festivals',
    fetchFestivals
  );
  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      {festivaldata.map((festival) => (
        <div key={festival.id}>
          <Festival> {festival.name} </Festival>
          <FestivalDetail>
            {festival.date} <br /> {festival.venue}, {festival.place}
          </FestivalDetail>
          <FestivalIntroduction>{festival.description}</FestivalIntroduction>
          <LineUp>
            {festival.artists.map((artist) => (
              <div key={artist}>
                <ArtistButton>{artist}</ArtistButton>
              </div>
            ))}
          </LineUp>
        </div>
      ))}
    </div>
  );
}

export default GetFestivals;
