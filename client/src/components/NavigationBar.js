import React from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import Arrow from '../assets/Arrow';
import { Link } from 'react-router-dom';
import More from '../assets/More';
import ProfileIcon from './ProfileIcon';
import Icon from '../assets/festivent-profile.svg';

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
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
  font-size: 1.5rem;
`;

const SecondButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

function NavigationBar({ loggedIn, onProfile, onBackButtonClick }) {
  return (
    <NavHeader>
      <Link to="/festivals">
        <BackButton onClick={onBackButtonClick}>
          <Arrow />
          &thinsp;BACK
        </BackButton>
      </Link>
      {loggedIn ? (
        <Link to="/profile">
          <SecondButton>
            <ProfileIcon size="Nav" src={Icon} />
          </SecondButton>
        </Link>
      ) : onProfile ? (
        <Link to="/settings">
          <SecondButton>
            <More />
          </SecondButton>
        </Link>
      ) : null}
    </NavHeader>
  );
}

NavigationBar.propTypes = {
  loggedIn: propTypes.bool,
  onProfile: propTypes.bool,
  onBackButtonClick: propTypes.func,
};

export default NavigationBar;
