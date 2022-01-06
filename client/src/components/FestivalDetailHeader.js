import React from 'react';
import styled from '@emotion/styled';
import CalcIcon from './CalcIcon';
import PropTypes from 'prop-types';
import GenreBadge from './GenreBadge';

const FestivalName = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  word-wrap: break-word;
  hyphens: auto;
`;

const FestivalData = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`;

const FestivalIntroduction = styled.div`
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 40px;
`;

function FestivalDetailHeader({
  color,
  quote,
  name,
  date,
  venue,
  place,
  description,
  ...props
}) {
  // const badgeItems = props.genres;
  // const genresList = badgeItems.sort().map((item, index) => {
  const genresList = props.genres.sort().map((item, index) => {
    return (
      <GenreBadge selected={item.selected} genre={item.name} key={index} />
    );
  });

  return (
    <>
      {color === 'unknown' || !quote ? (
        <div style={{ height: '45px' }} />
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px 0 25px 0',
          }}
        >
          <CalcIcon color={color}>{quote}</CalcIcon>
        </div>
      )}
      <FestivalName>{name}</FestivalName>
      <FestivalData>
        {date} <br /> {venue}, {place}
      </FestivalData>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
        }}
      >
        {genresList}
      </div>
      <FestivalIntroduction>{description}</FestivalIntroduction>
    </>
  );
}

FestivalDetailHeader.propTypes = {
  color: PropTypes.string,
  quote: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  venue: PropTypes.string,
  place: PropTypes.string,
  date: PropTypes.string,
  genres: PropTypes.array,
  description: PropTypes.string,
  selected: PropTypes.bool,
};

export default FestivalDetailHeader;
