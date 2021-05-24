import React from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import Content from '../layout/Content';
import Button from '../Button';
import Input from '../Input';
import Form from '../layout/Form';
import Heart from '../../assets/festivent-start.png';
import Close from '../../assets/Close';
import { Link } from 'react-router-dom';

const TeaserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flew-direction: column;
  justify-content: center;
  margin-top: 155px;
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
  font-family: 'Quicksand';
  font-weight: 300;
  font-size: 1rem;
  margin-right: 10px;
`;

const LoginToggle = styled(Link)`
  font-size: 1rem;
  font-family: 'Quicksand';
  font-weight: 300;
  text-decoration: none;
  color: ${(props) => props.theme.colors.texthighlight};
  cursor: pointer;
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 45px;
`;

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

function SignIn({ closeModal }) {
  async function handleSignInSubmit(event) {
    event.preventDefault();
    alert('Hello back, handsome!');
  }

  return (
    <>
      <Content>
        <CloseButtonContainer>
          <CloseButton onClick={closeModal}>
            <Close />
          </CloseButton>
        </CloseButtonContainer>
        <TeaserContainer>
          <Logo src={Heart} alt="festivent logo" />
        </TeaserContainer>
        <Form onSubmit={handleSignInSubmit}>
          <Input
            type="text"
            size="User"
            placeholder="Username"
            maxLength={11}
            required
          />
          <Input type="password" size="User" placeholder="Password" required />
          <ButtonContainer>
            <Button type="submit" size="Small" onClick={handleSignInSubmit}>
              Log In
            </Button>
          </ButtonContainer>
        </Form>
        <LoginLink>
          <LoginText>Don&apos;t have an Account?</LoginText>
          <LoginToggle to="/register">Sign Up</LoginToggle>
        </LoginLink>
      </Content>
    </>
  );
}

SignIn.propTypes = {
  closeModal: propTypes.func,
};

export default SignIn;
