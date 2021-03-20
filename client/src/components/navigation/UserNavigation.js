import React from 'react';
import styled from '@emotion/styled';
import Arrow from '../../assets/Arrow';
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
  font-family: 'Quicksand';
  font-weight: 300;
  font-size: 1.5rem;
  justify-content: flex-start;
`;

const ProfileButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  justify-content: flex-end;
`;

export default function UserNavigation() {
  return (
    <NavHeader>
      <Link to="/">
        <BackButton>
          <Arrow />
          &thinsp;BACK
        </BackButton>
      </Link>
      <Link to="/profile">
        <ProfileButton>
          <ProfileIcon size="Nav" src={Icon} />
        </ProfileButton>
      </Link>
    </NavHeader>
  );
}
