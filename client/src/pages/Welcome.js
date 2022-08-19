import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Input } from '../components/Input';
import { useNavigate } from 'react-router-dom';
import { Content, Form, Container } from '../components/layout/Containers';
import AnimationContainer from '../components/layout/AnimationContainer';
import CreateModal from '../components/modals/CreateModal';
import Toggle from '../components/Toggle';

const WelcomeText = styled.h2`
  font-size: ${(props) => props.theme.fontsize.xxl};
  font-weight: ${(props) => props.theme.fontweight.light};
  padding-top: 255px;
`;

const NameText = styled.span`
  font-size: ${(props) => props.theme.fontsize.xs};
  font-weight: ${(props) => props.theme.fontweight.light};
  margin-top: 8px;
`;

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 200px;
`;

const SwitchText = styled.span`
  font-size: ${(props) => props.theme.fontsize.m};
  margin-right: 15px;
  padding-top: 5px;
`;

const LoginLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const LoginText = styled.span`
  font-size: ${(props) => props.theme.fontsize.s};
  font-weight: ${(props) => props.theme.fontweight.light};
  margin-right: 10px;
`;

const LoginToggle = styled.button`
  width: auto;
  background: none;
  text-align: center;
  font-weight: ${(props) => props.theme.fontweight.light};
  font-size: ${(props) => props.theme.fontsize.s};
  text-decoration: none;
  color: ${(props) => props.theme.colors.texthighlight};
  border: none;
  cursor: pointer;
`;

function Welcome({ onThemeChange, theme }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(sessionStorage.getItem('Name') || '');
  const inputRef = useRef(null);
  const [isShowing, setShowing] = useState(false);
  const [loginSwitch, setLoginSwitch] = useState(true);

  const closeModal = () => {
    setShowing(false);
    setLoginSwitch(true);
  };

  const openModal = () => {
    setShowing(!isShowing);
  };

  const handleLogin = () => {
    if (loginSwitch === false) {
      setLoginSwitch(true);
    } else {
      setLoginSwitch(false);
    }
  };

  const onChange = (event) => setUser(event.target.value);

  const keyboardEnter = (event) => {
    if (event.keyCode === 13) {
      sessionStorage.setItem('Name', user);
      navigate('/genres');
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <Content>
        <AnimationContainer>
          <Container>
            <WelcomeText>Welcome</WelcomeText>
            <Form>
              <Input
                type="text"
                size="Name"
                maxLength={11}
                value={user}
                onChange={onChange}
                onKeyDown={(event) => keyboardEnter(event)}
                ref={inputRef}
              />
              <NameText>Enter Your Name</NameText>
            </Form>
            <SwitchContainer>
              <SwitchText>Switch to Darkmode</SwitchText>
              <Toggle checked={theme} toggleHandler={onThemeChange} />
            </SwitchContainer>
            <LoginLink>
              <LoginText>Already have an Account?</LoginText>
              <LoginToggle onClick={openModal}>Log In</LoginToggle>
            </LoginLink>
          </Container>
        </AnimationContainer>
      </Content>
      <CreateModal
        renderOnModal
        showModal={isShowing}
        closeModal={closeModal}
        loginState={loginSwitch}
        handleSwitch={handleLogin}
      />
    </>
  );
}

Welcome.propTypes = {
  onThemeChange: PropTypes.func,
  theme: PropTypes.object,
};

export default Welcome;
