import React from 'react';
import styled from '@emotion/styled';
import Arrow from '../../assets/Arrow';
import More from '../../assets/More';
import { Link } from 'react-router-dom';

const NavHeader = styled.nav`
  display: flex;
  width: 100%;
  height: 75px;
  align-items: flex-end;
  justify-content: space-between;
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

const SettingsButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  justify-content: flex-end;
`;

export default function SettingsNavigation() {
  return (
    <NavHeader>
      <Link to="/">
        <BackButton>
          <Arrow />
          &thinsp;BACK
        </BackButton>
      </Link>
      <Link to="/Settings">
        <SettingsButton>
          <More />
        </SettingsButton>
      </Link>
    </NavHeader>
  );
}
