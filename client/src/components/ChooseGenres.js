import React from 'react';
import GenreButton from '../components/GenreButton';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';

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

async function fetchGenres() {
  const response = await fetch('/festivals');
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
  const { status, data: genredata, error } = useQuery('festivals', fetchGenres);
  const [selectGenres, setSelectGenres] = React.useState([]);

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  const handleClick = (event) => {
    event.preventDefault();

    const newSelectedGenres = [];
    if (selectGenres.indexOf(event.target.innerHTML) === -1) {
      selectGenres.push(event.target.innerHTML);
      setSelectGenres(selectGenres);
      console.log('Stored:', selectGenres);
    } else {
      selectGenres.forEach((selectedGenre) => {
        if (selectedGenre != event.target.innerHTML) {
          newSelectedGenres.push(selectedGenre);
        } else {
          console.log(
            'found the genre ',
            event.target.innerHTML,
            ' and removed it'
          );
        }
      });
      setSelectGenres(newSelectedGenres);
      console.log(
        'Removed: ',
        event.target.innerHTML,
        ' new: ',
        newSelectedGenres
      );
    }
  };
  return (
    <div>
      <Genrechoice>
        {genredata.map((genre) => (
          <div key={genre}>
            <Cell>
              <GenreButton onClick={handleClick}>{genre}</GenreButton>
            </Cell>
          </div>
        ))}
        <Fill />
      </Genrechoice>
    </div>
  );
}

export default ChooseGenres;

// Used this with a global const of an empty array
// if (selectGenres.indexOf(event.target.innerHTML) === -1) {
//   selectGenres.push(event.target.innerHTML);
//   console.log('Stored:', selectGenres);
// } else if (event.target.value !== -1) {
//   selectGenres.splice(event.target.innerHTML, 1);
//   console.log('Removed:', selectGenres);
// }
// but it only spliced the first element of the array, no matter what button I clicked

// used this with the empty array from the state
// if (selectGenres.indexOf(event.target.innerHTML) === -1) {
//   selectGenres.push(event.target.innerHTML);
//   setSelectGenres(selectGenres);
//   console.log('Stored:', selectGenres);
// }
//same outcome with splice
