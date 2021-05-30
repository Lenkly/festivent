import React from 'react';
import { useQuery } from 'react-query';
import getFestival from '../api/getFestival';
import styled from '@emotion/styled';
import ArtistButton from './ArtistButton';
import CalcIcon from './CalcIcon';
import calculateIconValue from '../lib/calculateIconValue';
import Error from './Error';
import Loading from './Loading';
import { colorfulBackground } from '../animation/backgrounds';
import Ticket from '../assets/Ticket';
import Favourite from '../assets/Favourite';
import propTypes from 'prop-types';
// import { useParams } from 'react-router-dom';

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

const FestivalData = styled.div`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const FestivalIntroduction = styled.div`
  font-size: 0.75rem;
  font-family: 'Quicksand';
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const LineUpHeader = styled.div`
  font-size: 1.25rem;
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
  background-size: 400%;
  animation: ${colorfulBackground} 10s ease infinite;
  animation-delay: 0s;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
`;
const Cell = styled.div`
  padding: 2px;
  overflow: hidden;
`;
const Fill = styled.div`
  flex-grow: 1;
  background: ${(props) => props.theme.colors.background};
`;

const CTAButton = styled.button`
  width: auto;
  height: 20px;
  background: none;
  text-align: center;
  font-family: 'Quicksand';
  font-weight: 300;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin-bottom: 25px;
`;

function FestivalDetail({ onFavouriteClick, onTicketClick }) {
  // const festivalId = useParams();
  const { status, data: festivaldata } = useQuery('festivals', getFestival);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return <Error />;
  }

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
          <FestivalData>
            {festival.date} <br /> {festival.venue}, {festival.place}
          </FestivalData>
          <FestivalIntroduction>{festival.description}</FestivalIntroduction>
          <LineUpHeader>Line-Up</LineUpHeader>
          <LineUp>
            {festival.artists.sort().map((artist) => (
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
      <div style={{ paddingTop: '43px' }}>
        <CTAButton onClick={onFavouriteClick}>
          <Favourite />
          &ensp;Add to Favourites
        </CTAButton>
        <CTAButton onClick={onTicketClick}>
          <Ticket />
          &ensp;Buy Tickets
        </CTAButton>
      </div>
    </div>
  );
}

FestivalDetail.propTypes = {
  onFavouriteClick: propTypes.func,
  onTicketClick: propTypes.func,
};

export default FestivalDetail;
