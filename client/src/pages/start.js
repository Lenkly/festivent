import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { Content, Container } from '../components/layout/Containers';
import AnimationContainer from '../components/layout/AnimationContainer';
import Button from '../components/buttons/Button';
import { fadeIn } from '../animation/fades';
import { shiftUp } from '../animation/shifts';

const WelcomeText = styled.h2`
  font-size: ${(props) => props.theme.fontsize.xxl};
  font-weight: 300;
`;

const UserText = styled.h2`
  font-size: ${(props) => props.theme.fontsize.xxl};
  padding-top: 10px;
`;

const AnimatedGreetings = styled(Container)`
  padding-top: 300px;
  height: 45vh;
  animation: ${shiftUp} 1s ease-in-out forwards 0.5s;
`;

const AnimatedContainer = styled(Container)`
  opacity: 0;
  animation: ${fadeIn} 3s ease-in-out forwards 0.5s;
  cursor: pointer;
`;

const ButtonSection = styled.section`
  margin: 65px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 112px;
`;

const LoginText = styled.span`
  font-size: ${(props) => props.theme.fontsize.s};
  margin-right: 10px;
`;

const LoginToggle = styled.button`
  text-align: center;
  background: transparent;
  border: none;
  font-weight: 300;
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
          <Container>
            <AnimatedGreetings>
              <WelcomeText>Welcome</WelcomeText>
              <UserText>{user}</UserText>
            </AnimatedGreetings>
            <AnimatedContainer>
              <ButtonSection>
                <Link to="/profile">
                  <Button size="Small">Profile</Button>
                </Link>
                <Link to="/genres">
                  <Button size="Small">New Match</Button>
                </Link>
              </ButtonSection>
              <div style={{ paddingTop: '20px' }}>
                <LoginText>Not you?</LoginText>
                <LoginToggle onClick={handleLogoutClick}>Log Out</LoginToggle>
              </div>
            </AnimatedContainer>
          </Container>
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
