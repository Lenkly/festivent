import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import CalcIcon from './CalcIcon';

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 2.25rem;
  align-self: center;
  justify-self: start;
  cursor: pointer;
`;

const Festival = styled.div`
  align-self: center;
  margin-left: 5px;
`;

const FestivalTitle = styled.p`
  font-size: 1.5rem;
  margin: 0px;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
`;
const FestivalInfo = styled.p`
  font-size: 0.75rem;
  line-height: 1.5;
  margin: 3px 0;
`;

function FestivalCard({ onClick, color, quote, name, venue, place }) {
  return (
    <Card onClick={onClick}>
      <CalcIcon color={color}>{quote}</CalcIcon>
      <Festival>
        <FestivalTitle>{name}</FestivalTitle>
        <FestivalInfo>
          {venue}, {place}
        </FestivalInfo>
      </Festival>
    </Card>
  );
}

FestivalCard.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  quote: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  venue: PropTypes.string,
  place: PropTypes.string,
};

export default FestivalCard;
