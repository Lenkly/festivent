import React from 'react';
import styled from '@emotion/styled';
import NavArrow from '../../assets/arrow_white.png';
import More from '../../assets/more_white.png';
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

const Symbol = styled.img`
  height: 23px;
  width: 23px;
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
          <Symbol src={NavArrow} alt="Go Back" />
          BACK
        </BackButton>
      </Link>
      <Link to="/Settings">
        <SettingsButton>
          <Symbol src={More} alt="Go to Settings" />
        </SettingsButton>
      </Link>
    </NavHeader>
  );
}
