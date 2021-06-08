import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import Content from '../components/layout/Content';
import getGenres from '../api/getGenres';
import GenreButton from '../components/GenreButton';
import ConfirmGenreChoice from '../components/ConfirmGenreChoice';
import usePersistentState from '../hooks/usePersistentState';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Form from '../components/layout/Form';
import AnimationContainer from '../components/layout/AnimationContainer';

/* STYLES */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
const Cell = styled.div`
  padding: 10px;
  overflow: hidden;
`;
const Fill = styled.div`
  background: ${(props) => props.theme.colors.background};
`;

const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-family: 'Quicksand';
  font-weight: 300;
  margin-top: 80px;
  margin-bottom: 25px;
`;

/* CONTENT */

function Genres() {
  const [matchable, setMatchable] = useState(false);
  const history = useHistory();
  const { status, data: genredata } = useQuery('genres', getGenres);
  const [selectedGenres, setSelectedGenres] = usePersistentState(
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

  const handleGenreChoiceClick = () => {
    history.push('/matches');
  };

  return (
    <Content>
      <Form>
        <AnimationContainer>
          <Text>What Kind of Music Do You Like?</Text>
          <Wrapper>
            <Genrechoice>
              {genredata.map((genre) => (
                <Cell key={genre}>
                  <GenreButton
                    onClick={(event) => handleClick(event, genre)}
                    selected={selectedGenres.includes(genre)}
                  >
                    {genre}
                  </GenreButton>
                </Cell>
              ))}
              <Fill />
            </Genrechoice>
            <ConfirmGenreChoice
              disabled={!matchable}
              onGenreChoiceClick={handleGenreChoiceClick}
            />
          </Wrapper>
        </AnimationContainer>
      </Form>
    </Content>
  );
}

export default Genres;
