import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { Content, FlexContainer } from '../components/layout/Containers';
import AnimationContainer from '../components/layout/AnimationContainer';
import Button from '../components/buttons/Button';
import { fadeIn } from '../animation/fades';
import { shiftUp } from '../animation/shifts';

const WelcomeText = styled.h2`
  font-size: ${(props) => props.theme.fontsize.xxl};
  font-weight: ${(props) => props.theme.fontweight.light};
`;

const UserText = styled.h2`
  font-size: ${(props) => props.theme.fontsize.xxl};
  padding-top: 10px;
`;

const AnimatedGreetings = styled(FlexContainer)`
  animation: ${shiftUp} 1s ease-in-out forwards 0.5s;
`;

const AnimatedContainer = styled(FlexContainer)`
  opacity: 0;
  animation: ${fadeIn} 3s ease-in-out forwards 0.5s;
  cursor: pointer;
`;

const LoginText = styled.span`
  font-size: ${(props) => props.theme.fontsize.s};
  margin-right: 10px;
`;

const LoginToggle = styled.button`
  text-align: center;
  background: transparent;
  border: none;
  font-weight: ${(props) => props.theme.fontweight.light};
  font-size: ${(props) => props.theme.fontsize.s};
  text-decoration: none;
  color: ${(props) => props.theme.colors.texthighlight};
  cursor: pointer;
`;

function Start() {
  const navigate = useNavigate();
  const user = sessionStorage.getItem('Name') || 'Stranger';

  const handleLogoutClick = () => {
    sessionStorage.removeItem('Name');
    navigate('/welcome');
  };

  return (
    <>
      <Content>
        <AnimationContainer>
          <FlexContainer column alignItems="center">
            <AnimatedGreetings
              column
              alignItems="center"
              height="45vh"
              p="300px 0 0"
            >
              <WelcomeText>Welcome</WelcomeText>
              <UserText>{user}</UserText>
            </AnimatedGreetings>
            <AnimatedContainer column alignItems="center">
              <FlexContainer
                column
                alignItems="center"
                m="65px 0 100px"
                height="112px"
                justifyContent="space-between"
              >
                <Link to="/profile">
                  <Button size="Small">Profile</Button>
                </Link>
                <Link to="/genres">
                  <Button size="Small">New Match</Button>
                </Link>
              </FlexContainer>
              <div style={{ paddingTop: '20px' }}>
                <LoginText>Not you?</LoginText>
                <LoginToggle onClick={handleLogoutClick}>Log Out</LoginToggle>
              </div>
            </AnimatedContainer>
          </FlexContainer>
        </AnimationContainer>
      </Content>
    </>
  );
}

Start.propTypes = {
  loggedIn: PropTypes.bool,
  onThemeChange: PropTypes.func,
  theme: PropTypes.object,
};

export default Start;
