import React from 'react';
import styled from '@emotion/styled';
import Input from '../components/Input';

const Content = styled.div`
display: flex:
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
padding: 0px 35px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

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
  const [nameUser, setNameUser] = React.useState('');

  return (
    <Content>
      <Form>
        <WelcomeText>Welcome</WelcomeText>
        <Input
          type="text"
          size="Name"
          value={nameUser}
          onChange={(event) => {
            setNameUser(event.target.value);
          }}
        />
        <NameText>Type Your Name</NameText>
        <LoginLink>
          <LoginText>Have An Account?</LoginText>
          <HighlightLink>Log In</HighlightLink>
        </LoginLink>
      </Form>
    </Content>
  );
}

export default Welcome;
