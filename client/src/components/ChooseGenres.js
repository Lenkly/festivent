import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import getGenres from '../api/getGenres';
import GenreButton from '../components/GenreButton';
import ConfirmGenreChoice from '../components/ConfirmGenreChoice';
import usePersistentState from '../hooks/usePersistentState';

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

function ChooseGenres() {
  const { status, data: genredata } = useQuery('genres', getGenres);
  const [selectedGenres, setSelectedGenres] = usePersistentState(
    'SelectedGenres',
    []
  );
  const [matchable, setMatchable] = useState(false);
  const history = useHistory();

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return (
      <span>
        Oh no, something bad happened
        <span role="img" aria-label="sadface">
          😢
        </span>
        <br />
        Please try again.
      </span>
    );
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
    history.push('/matchlist');
  };

  return (
    <div>
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
    </div>
  );
}

export default ChooseGenres;
