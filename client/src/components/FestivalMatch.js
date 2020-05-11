import styled from '@emotion/styled';
import React from 'react';
import CalcIcon from './CalcIcon';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import quota from '../lib/Quota';
import fadeIn from '../animation/fadein';
import usePersistentState from '../hooks/usePersistentState';

const CardContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-in-out forwards 0.5s;
`;

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

function calculateIconValue(quoteValue) {
  switch (true) {
    case quoteValue >= 0 && quoteValue <= 15:
      return 'almostnone';
    case quoteValue > 15 && quoteValue <= 25:
      return 'verylow';
    case quoteValue > 25 && quoteValue <= 35:
      return 'low';
    case quoteValue > 35 && quoteValue <= 45:
      return 'substandard';
    case quoteValue > 45 && quoteValue <= 55:
      return 'okay';
    case quoteValue > 55 && quoteValue <= 65:
      return 'average';
    case quoteValue > 65 && quoteValue <= 75:
      return 'moderate';
    case quoteValue > 75 && quoteValue <= 85:
      return 'high';
    case quoteValue > 85 && quoteValue <= 95:
      return 'veryhigh';
    case quoteValue > 95 && quoteValue <= 100:
      return 'perfect';
    default:
      return '???';
  }
}

function compare(a, b) {
  if (a.quote > b.quote) {
    return -1;
  }
  if (a.quote < b.quote) {
    return 1;
  }

  return 0;
}

function FestivalMatch() {
  const history = useHistory();
  let { status, data: festivaldata } = useQuery('festivals', fetchFestivals);
  const [selectedGenres] = usePersistentState('SelectedGenres', []);

  async function fetchFestivals() {
    const fetchRoute =
      '/api/festivals?genres_like=' + selectedGenres.join('&genres_like=');
    const response = await fetch(fetchRoute);
    const festivals = await response.json();
    return festivals;
  }
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
    sessionStorage.setItem(
      'SelectedFestivalIcons',
      festivaldata[index].calcIconColor
    );
    history.push('/details');
  };

  for (const [index] of quotes.entries()) {
    Object.defineProperty(festivaldata[index], 'quote', {
      value: quotes[index],
      writable: true,
    });
  }

  function calculateIconColor() {
    for (let index = 0; index < festivaldata.length; index++) {
      Object.defineProperty(festivaldata[index], 'calcIconColor', {
        value: calculateIconValue(festivaldata[index].quote),
        writable: true,
      });
    }
  }
  calculateIconColor();

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
              <CalcIcon color={festival.calcIconColor}>
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

export default FestivalMatch;
