import React from 'react';
import GenreButton from '../components/GenreButton';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import Button from './Button';
import { useHistory } from 'react-router-dom';

const Genrechoice = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 35px;
  background-image: linear-gradient(
    145deg,
    rgba(255, 247, 0, 0.5),
    rgba(255, 145, 0, 0.5),
    rgba(255, 0, 132, 0.5),
    rgba(255, 0, 242, 0.5),
    rgba(187, 0, 255, 0.5),
    rgba(85, 0, 255, 0.5),
    rgba(0, 106, 255, 0.5),
    rgba(0, 204, 255, 0.5),
    rgba(0, 255, 106, 0.5),
    rgba(89, 255, 0, 0.5),
    rgba(255, 247, 0, 0.5)
  );
`;
const Cell = styled.div`
  padding: 10px;
  overflow: hidden;
`;
const Fill = styled.div`
  background: #f9f9f9;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

async function fetchGenres() {
  const response = await fetch('/api/festivals');
  const festivals = await response.json();

  const genreArray = festivals.reduce((newArray, festivalGenres) => {
    if (newArray.indexOf(festivalGenres.genres) === -1) {
      newArray.push(festivalGenres.genres);
    }
    return [...new Set([].concat(...newArray))].sort();
  }, []);

  return genreArray;
}

function ChooseGenres() {
  const { status, data: genredata } = useQuery('genres', fetchGenres);
  const [selectGenres, setSelectGenres] = React.useState([]);
  const history = useHistory();

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

  const handleClick = (event, genre) => {
    event.preventDefault();

    const newSelectedGenres = [];
    if (selectGenres.indexOf(genre) === -1) {
      selectGenres.push(genre);
      setSelectGenres(selectGenres);
      console.log('Stored:', selectGenres);
    } else {
      selectGenres.forEach((selectedGenre) => {
        if (selectedGenre !== genre) {
          newSelectedGenres.push(selectedGenre);
        } else {
          console.log('found the genre:', genre, 'and removed it');
        }
      });
      setSelectGenres(newSelectedGenres);
      console.log('Removed:', genre, 'new:', newSelectedGenres);
    }
  };

  const onMatchButtonClick = () => {
    sessionStorage.setItem('Genres', selectGenres);
    history.push('/Matchlist');
  };

  return (
    <div>
      <Genrechoice>
        {genredata.map((genre) => (
          <Cell key={genre}>
            <GenreButton
              type="button"
              onClick={(event) => handleClick(event, genre)}
            >
              {genre}
            </GenreButton>
          </Cell>
        ))}
        <Fill />
      </Genrechoice>
      <ButtonWrapper>
        <Button type="Submit" onClick={onMatchButtonClick} size="Large">
          Match Me
        </Button>
      </ButtonWrapper>
    </div>
  );
}

export default ChooseGenres;
