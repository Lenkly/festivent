import React from 'react';
import styled from '@emotion/styled';
import Arrow from '../../assets/Arrow';
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
  color: ${(props) => props.theme.colors.text};
  font-family: 'Quicksand Light';
  font-size: 23px;
  justify-content: flex-start;
`;

export default function SimpleNavigation() {
  return (
    <NavHeader>
      <Link to="/matchlist">
        <BackButton>
          <Arrow />
          &thinsp;BACK
        </BackButton>
      </Link>
    </NavHeader>
  );
}
