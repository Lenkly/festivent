import React from 'react';
import styled from '@emotion/styled';
import NavArrow from '../../assets/arrow_white.png';
import { Link } from 'react-router-dom';

const NavHeader = styled.nav`
  display: flex;
  width: 100%;
  height: 75px;
  align-items: flex-end;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-family: 'Quicksand Light';
  font-size: 23px;
  justify-content: flex-start;
`;

const Arrow = styled.img`
  height: 23px;
  width: 23px;
`;

export default function SimpleNavigation() {
  return (
    <NavHeader>
      <Link to="/matchlist">
        <BackButton>
          <Arrow src={NavArrow} alt="Go Back" />
          BACK
        </BackButton>
      </Link>
    </NavHeader>
  );
}
