import React from 'react';
import styled from '@emotion/styled';
import Input from '../components/Input';
import { useHistory } from 'react-router-dom';
import Content from '../components/layout/Content';
import Form from '../components/layout/Form';
import fadeIn from '../animation/fadein';

const WelcomeText = styled.div`
  padding-top: 255px;
  font-family: 'Quicksand Light';
  font-size: 34px;
  margin_bottom: 50px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 1 forwards;
  animation-delay: 0.25s;
`;

const NameText = styled.div`
  font-family: 'Quicksand Light';
  font-size: 14px;
  margin-top: 8px;
`;

const LoginLink = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 200px;
`;

const LoginText = styled.div`
  font-family: 'Quicksand Light';
  font-size: 15px;
  margin-right: 5px;
`;

const HighlightLink = styled.div`
  font-size: 15px;
  color: #bb00ff;
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
        <LoginLink>
          <LoginText>Have An Account?</LoginText>
          <HighlightLink>Log In</HighlightLink>
        </LoginLink>
      </Form>
    </Content>
  );
}

export default Welcome;
