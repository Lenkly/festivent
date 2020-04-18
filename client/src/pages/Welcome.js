import React from 'react';
import styled from '@emotion/styled';
import Input from '..Input/components/Input';

const Content = styled.div`
display: flex:
flex-direction: column;
align-items: center;
justify-content: center;
width: 80%;
background: none;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const WelcomeText = styled.div`
  color: #fff;
  font-size: 34px;
  margin_bottom: 50px;
  text-transform: uppercase;
`;

const NameText = styled.div`
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
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
      </Form>
    </Content>
  );
}

export default Welcome;
