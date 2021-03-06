import React from 'react';
import { useQuery } from 'react-query';
import getFestival from '../api/getFestival';
import styled from '@emotion/styled';
import ArtistButton from './ArtistButton';
import CalcIcon from './CalcIcon';
import calculateIconValue from '../lib/calculateIconValue';
import Loading from './Loading';
import { useParams } from 'react-router-dom';

const Match = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

const FestivalName = styled.div`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 20px;
  word-wrap: break-word;
  hyphens: auto;
`;

const FestivalDetail = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
`;

const FestivalIntroduction = styled.div`
  font-size: 12px;
  font-family: 'Quicksand Light';
  line-height: 1.3;
  margin-bottom: 20px;
`;

const LineUpHeader = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

const LineUp = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  padding: 2px;
  overflow: hidden;
`;
const Fill = styled.div`
  flex-grow: 1;
  background: ${(props) => props.theme.colors.background};
`;

function Festival() {
  const festivalId = useParams();
  const { status, data: festivaldata } = useQuery('festivals', getFestival);
  if (status === 'loading') {
    return <Loading />;
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
  console.log(festivalId);

  if (festivaldata.length > 0) {
    Object.defineProperty(festivaldata[0], 'quote', {
      value: sessionStorage.getItem('selectedFestivalQuote'),
      writable: true,
    });
  }

  return (
    <div>
      {festivaldata.map((festival) => (
        <div key={festival.id}>
          <Match>
            <CalcIcon color={calculateIconValue(festival.quote)}>
              {festival.quote}
            </CalcIcon>
          </Match>
          <FestivalName>{festival.name}</FestivalName>
          <FestivalDetail>
            {festival.date} <br /> {festival.venue}, {festival.place}
          </FestivalDetail>
          <FestivalIntroduction>{festival.description}</FestivalIntroduction>
          <LineUpHeader>Line-Up</LineUpHeader>
          <LineUp>
            {festival.artists.map((artist) => (
              <React.Fragment key={artist}>
                <Cell>
                  <ArtistButton>{artist}</ArtistButton>
                </Cell>
                <Fill />
              </React.Fragment>
            ))}
          </LineUp>
        </div>
      ))}
    </div>
  );
}

export default Festival;
