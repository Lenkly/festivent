import React from 'react';
import styled from '@emotion/styled';
import Content from '../layout/Content';
import Button from '../Button';
import Input from '../Input';
import Form from '../layout/Form';
import LoginButton from '../LoginButton';
import Heart from '../../assets/festivent-start.png';

const TeaserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flew-direction: column;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 54px;
`;

const Logo = styled.img`
  height: 30%;
  width: 30%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const LoginLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const LoginText = styled.p`
  font-family: 'Quicksand Light';
  font-size: 15px;
`;

function SignIn() {
  return (
    <Content>
      <TeaserContainer>
        <Logo src={Heart} alt="festivent logo" />
      </TeaserContainer>
      <Form>
        <Input
          type="text"
          size="User"
          placeholder="Username"
          maxLength={11}
          required
        />
        <Input type="password" size="User" placeholder="Password" required />
        <ButtonContainer>
          <Button size="Small">Log In</Button>
        </ButtonContainer>
      </Form>
      <LoginLink>
        <LoginText>Don&apos;t have an Account?</LoginText>
        <LoginButton>Sign Up</LoginButton>
      </LoginLink>
    </Content>
  );
}
export default SignIn;
