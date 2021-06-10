import React from 'react';
import styled from '@emotion/styled';
import CalcIcon from './CalcIcon';
import PropTypes from 'prop-types';

const FestivalName = styled.div`
  text-align: center;
  padding-bottom: 20px;
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

function FestivalDetailHeader({
  color,
  quote,
  name,
  date,
  venue,
  place,
  description,
}) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px 0 25px 0',
        }}
      >
        <CalcIcon color={color}>{quote}</CalcIcon>
      </div>
      <FestivalName>{name}</FestivalName>
      <FestivalData>
        {date} <br /> {venue}, {place}
      </FestivalData>
      <FestivalIntroduction>{description}</FestivalIntroduction>
    </>
  );
}

FestivalDetailHeader.propTypes = {
  color: PropTypes.func,
  quote: PropTypes.number,
  name: PropTypes.string,
  venue: PropTypes.string,
  place: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};

export default FestivalDetailHeader;