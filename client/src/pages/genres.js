import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Content, Form } from '../components/layout/Containers';
import getGenres from '../api/getGenres';
import Button from '../components/buttons/Button';
import { ChooseGenreButton } from '../components/buttons/GenreButton';
import { usePersistentSessionState } from '../hooks/usePersistentState';
import Loading from '../components/Loading';
import Error from '../components/Error';
import AnimationContainer from '../components/layout/AnimationContainer';

/* STYLES */

const Genrechoice = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 35px;
  background-image: linear-gradient(
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
  max-width: 306px;
`;

const Fill = styled.div`
  background: ${(props) => props.theme.colors.background};
`;

const Text = styled.h2`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-weight: ${(props) => props.theme.fontweight.light};
  margin-top: 80px;
  margin-bottom: 25px;
`;

/* CONTENT */

function Genres() {
  const [matchable, setMatchable] = useState(false);
  const navigate = useNavigate();
  const { status, data: genredata } = useQuery('genres', getGenres);
  const [selectedGenres, setSelectedGenres] = usePersistentSessionState(
    'SelectedGenres',
    []
  );

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return <Error />;
  }

  const handleClick = (event, genre) => {
    event.preventDefault();

    const newSelectedGenres = [...selectedGenres];
    const genreIndex = newSelectedGenres.indexOf(genre);
    if (genreIndex === -1) {
      newSelectedGenres.push(genre);
    } else {
      newSelectedGenres.splice(genreIndex, 1);
    }
    setSelectedGenres(newSelectedGenres);
    setMatchable(newSelectedGenres.length > 0);
  };

  const handleGenreSubmit = (e) => {
    e.preventDefault();
    navigate('/festivals');
  };

  return (
    <Content>
      <Form>
        <AnimationContainer>
          <Text>What Kind of Music Do You Like?</Text>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Genrechoice>
              {genredata.map((genre) => (
                <ChooseGenreButton
                  key={genre}
                  onGenreButtonClick={(event) => handleClick(event, genre)}
                  selected={selectedGenres.includes(genre)}
                  genre={genre}
                />
              ))}
              <Fill />
            </Genrechoice>
            <Button
              type="submit"
              size="Large"
              disabled={!matchable}
              onClick={handleGenreSubmit}
            >
              Match Me
            </Button>
          </div>
        </AnimationContainer>
      </Form>
    </Content>
  );
}

export default Genres;
