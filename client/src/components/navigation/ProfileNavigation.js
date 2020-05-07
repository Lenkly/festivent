import React from 'react';
import styled from '@emotion/styled';
import NavArrow from '../../assets/arrow_white.png';
import { Link } from 'react-router-dom';
import ProfileIcon from '../ProfileIcon';
import Icon from '../../assets/festivent-profile.svg';

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

const Arrow = styled.img`
  height: 23px;
  width: 23px;
`;

const ProfileButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  justify-content: flex-end;
`;

export default function ProfileNavigation() {
  return (
    <NavHeader>
      <Link to="/">
        <BackButton>
          <Arrow src={NavArrow} alt="Go Back" />
          BACK
        </BackButton>
      </Link>
      <Link to="/Profile">
        <ProfileButton>
          <ProfileIcon size="Nav" src={Icon} />
        </ProfileButton>
      </Link>
    </NavHeader>
  );
}
