import React from 'react';
import styled from '@emotion/styled';
import { LineUpArtistButton } from '../components/ArtistButton';
import { colorfulBackground } from '../animation/backgrounds';
import PropTypes from 'prop-types';

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

function FestivalLineup({ ...props }) {
  const buttonItems = props.artists;
  const artistList = buttonItems.sort().map((item, index) => {
    return <LineUpArtistButton key={index} artist={item} />;
  });

  return (
    <>
      <h3 style={{ marginBottom: '20px' }}>Line-Up</h3>
      <LineUp>{artistList}</LineUp>
    </>
  );
}

FestivalLineup.propTypes = {
  artists: PropTypes.array,
};

export default FestivalLineup;
