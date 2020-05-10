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
  margin-top: 100px;
  margin-bottom: 0;
`;

const Logo = styled.img`
  height: 30%;
  width: 30%;
`;

const TeaserText = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 1.3;
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

function SignUp() {
  return (
    <Content>
      <TeaserContainer>
        <Logo src={Heart} alt="festivent logo" />
        <TeaserText>
          Add favourites to your list and discover many more features when
          signed up!
        </TeaserText>
      </TeaserContainer>
      <Form>
        <Input
          type="text"
          size="User"
          placeholder="Username"
          maxLength={11}
          required
        />
        <Input type="email" size="User" placeholder="E-Mail" required />
        <Input type="password" size="User" placeholder="Password" required />
        <ButtonContainer>
          <Button size="Small">Sign Up</Button>
        </ButtonContainer>
      </Form>
      <LoginLink>
        <LoginText>Already have an Account?</LoginText>
        <LoginButton>Log In</LoginButton>
      </LoginLink>
    </Content>
  );
}
export default SignUp;
