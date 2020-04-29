import styled from '@emotion/styled';
import React from 'react';
import CalcIcon from './CalcIcon';
import { useHistory } from 'react-router-dom';

const Festivalcard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 35px;
  align-self: center;
  justify-self: start;
  cursor: pointer;
`;

const Festivaltext = styled.div`
  align-self: center;
  margin-left: 5px;
`;

const Festivaltitle = styled.p`
  font-size: 25px;
  margin: 0px;
`;
const Festivalvenue = styled.p`
  font-size: 12px;
  margin: 6px 0;
`;

function FestivalMatch() {
  const history = useHistory();
  const detailClick = () => {
    history.push('/Details');
  };
  return (
    <Festivalcard onClick={detailClick}>
      <CalcIcon color="perfect">98.7</CalcIcon>
      <Festivaltext>
        <Festivaltitle>Lollapalooza</Festivaltitle>
        <Festivalvenue>Olympiapark, Berlin</Festivalvenue>
      </Festivaltext>
    </Festivalcard>
  );
}

export default FestivalMatch;
