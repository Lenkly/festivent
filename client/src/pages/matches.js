import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import usePersistentState from '../hooks/usePersistentState';
import { fadeIn } from '../animation/fades';
import { Content, FlexRow, Form } from '../components/layout/Containers';
import Button from '../components/buttons/Button';
import FestivalCard from '../components/FestivalCard';
import AnimationContainer from '../components/layout/AnimationContainer';
import Loading from '../components/Loading';
import Error from '../components/Error';
import quota from '../lib/Quota';
import calculateIconValue from '../lib/calculateIconValue';

/* STYLES */

const CardContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-in-out forwards 0.5s;
  cursor: pointer;
`;

const Text = styled.h2`
  display: flex;
  flex-wrap: wrap;
  font-weight: ${(props) => props.theme.fontweight.light};
  padding-top: 80px;
  margin-bottom: 25px;
`;

export const AgainText = styled(Text)`
  font-size: ${(props) => props.theme.fontsize.l};
  text-align: center;
  padding-top: 10px;
`;

export const ButtonWrapper = styled(FlexRow)`
  justify-content: center;
  margin-bottom: 45px;
`;

/* HELPER */

function compare(a, b) {
  if (a.quote > b.quote) {
    return -1;
  }
  if (a.quote < b.quote) {
    return 1;
  }

  return 0;
}

/* CONTENT */

function Matchlist() {
  const navigate = useNavigate();

  const greetUser = sessionStorage.getItem('Name') || 'Stranger';

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

  const handleDetailsClick = (festivalId, index) => {
    const selectedFestival = festivalId;
    sessionStorage.setItem('selectedFestival', selectedFestival);
    sessionStorage.setItem('selectedFestivalQuote', quotes[index]);

    navigate(`/festivals/${selectedFestival}`); //should be the name
  };

  for (const [index] of quotes.entries()) {
    Object.defineProperty(festivaldata[index], 'quote', {
      value: quotes[index],
      writable: true,
    });
  }

  const handleAgainClick = () => {
    sessionStorage.removeItem('SelectedGenres');
    sessionStorage.removeItem('selectedFestival');
    sessionStorage.removeItem('selectedFestivalQuote');
    navigate('/genres');
  };
  //maybe rethink the usage of form in this context
  return (
    <Content>
      {selectedGenres.length > 0 ? (
        <Form>
          <AnimationContainer>
            <Text>
              {greetUser},
              <br /> These are your matches
            </Text>
          </AnimationContainer>
          <CardContainer>
            {festivaldata
              .sort((a, b) => compare(a, b))
              .map((festival, index) => (
                <FestivalCard
                  key={festival.id}
                  onClick={() => handleDetailsClick(festival.id, index)}
                  color={calculateIconValue(festival.quote)}
                  quote={festival.quote}
                  name={festival.name}
                  venue={festival.venue}
                  place={festival.place}
                />
              ))}
          </CardContainer>
          <AnimationContainer>
            <AgainText>
              Still Haven&apos;t Found What You Were Looking&nbsp;For?
            </AgainText>
            <ButtonWrapper align="Start">
              <Button onClick={handleAgainClick} size="Medium">
                Match Me Again
              </Button>
            </ButtonWrapper>
          </AnimationContainer>
        </Form>
      ) : (
        <Error />
      )}
    </Content>
  );
}

export default Matchlist;
