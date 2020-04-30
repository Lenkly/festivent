import styled from '@emotion/styled';
import React from 'react';
import CalcIcon from './CalcIcon';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';

const Festivalcard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 35px;
  align-self: center;
  justify-self: start;
  cursor: pointer;
`;

const Festivaltext = styled.div`
  align-self: center;
  margin-left: 5px;
`;

const Festivaltitle = styled.p`
  font-size: 25px;
  margin: 0px;
  word-wrap: break-word;
  hyphens: auto;
`;
const Festivalvenue = styled.p`
  font-size: 12px;
  line-height: 1.3;
  margin: 3px 0;
`;

// if (Array.length > 0) {
// const customGenres = new Array(sessionStorage.getItem('SelectedGenres').split(','));
// console.log(customGenres);
// }
// let selectGenre = '?genres_like' + a.join('&genres_like=');

async function fetchEvents() {
  const response = await fetch('/api/festivals');
  const festivals = await response.json();
  return festivals;
}

function FestivalMatch() {
  const history = useHistory();
  const { status, data: eventdata, error } = useQuery('festivals', fetchEvents);
  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  const detailClick = () => {
    history.push('/Details');
  };
  return (
    <div>
      {eventdata.map((event) => (
        <Festivalcard key={event.id} onClick={detailClick}>
          <CalcIcon color="perfect">98.7</CalcIcon>
          <Festivaltext>
            <Festivaltitle>{event.name}</Festivaltitle>
            <Festivalvenue>
              {event.venue}, {event.place}
            </Festivalvenue>
          </Festivaltext>
        </Festivalcard>
      ))}
    </div>
  );
}

export default FestivalMatch;
