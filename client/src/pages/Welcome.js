import React from 'react';
import styled from '@emotion/styled';
import Input from '../components/Input';
import { useHistory } from 'react-router-dom';
import Content from '../components/layout/Content';
import Form from '../components/layout/Form';
import ThemeSwitch from '../components/ThemeSwitch';

const WelcomeText = styled.div`
  padding-top: 255px;
  font-family: 'Quicksand Light';
  font-size: 34px;
  margin_bottom: 50px;
`;

const NameText = styled.div`
  font-family: 'Quicksand Light';
  font-size: 14px;
  margin-top: 8px;
`;
const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 200px;
`;

const SwitchText = styled.div`
  font-family: 'Quicksand Light';
  font-size: 20px;
  margin-right: 20px;
  padding-top: 5px;
`;

function Welcome() {
  const history = useHistory();
  const [nameUser, setNameUser] = React.useState(
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
        <SwitchContainer>
          <SwitchText>Switch to Darkmode</SwitchText>
          <ThemeSwitch />
        </SwitchContainer>
      </Form>
    </Content>
  );
}

export default Welcome;
