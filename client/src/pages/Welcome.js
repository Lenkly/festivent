import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import { useHistory, Link } from 'react-router-dom';
import Content from '../components/layout/Content';
import Form from '../components/layout/Form';
import AnimationContainer from '../components/layout/AnimationContainer';
import ThemeSwitch from '../components/ThemeSwitch';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Quicksand Light';
`;

const WelcomeText = styled.div`
  padding-top: 255px;
`;

const NameText = styled.span`
  font-size: 14px;
  margin-top: 8px;
`;

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 200px;
`;

const SwitchText = styled.span`
  font-size: 20px;
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
  font-size: 15px;
  margin-right: 10px;
`;

const LoginToggle = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.texthighlight};
  cursor: pointer;
`;

function Welcome({ onThemeChange, theme }) {
  const history = useHistory();
  const [nameUser, setNameUser] = useState(
    sessionStorage.getItem('Name') || ''
  );

  const onChange = (event) => setNameUser(event.target.value);

  const keyboardEnter = (event) => {
    if (event.keyCode === 13) {
      sessionStorage.setItem('Name', nameUser);
      history.push('/genres');
    }
  };

  return (
    <Content>
      <AnimationContainer>
        <Container>
          <Form>
            <WelcomeText>Welcome</WelcomeText>
            <Input
              type="text"
              size="Name"
              maxLength={11}
              value={nameUser}
              onChange={onChange}
              onKeyDown={(event) => keyboardEnter(event)}
            />
            <NameText>Enter Your Name</NameText>
          </Form>
          <SwitchContainer>
            <SwitchText>Switch to Darkmode</SwitchText>
            <ThemeSwitch onChange={onThemeChange} value={theme} />
          </SwitchContainer>
          <LoginLink>
            <LoginText>Already have an Account?</LoginText>
            <LoginToggle to="/signin">Log In</LoginToggle>
          </LoginLink>
        </Container>
      </AnimationContainer>
    </Content>
  );
}

Welcome.propTypes = {
  onThemeChange: PropTypes.func,
  theme: PropTypes.object,
};

export default Welcome;
