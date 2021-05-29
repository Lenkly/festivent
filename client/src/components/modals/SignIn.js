import React from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import Content from '../layout/Content';
import Button from '../Button';
import Input from '../Input';
import Form from '../layout/Form';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  border: 3px solid green;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.backgroundLogin};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

function SignIn({ closeModal, showModal }) {
  const loginText = `Don't have an Account?`;

  async function handleSignInSubmit(event) {
    event.preventDefault();
    alert('Hello back, handsome!');
  }

  return (
    <>
      {showModal && (
        <Overlay>
          <Content>
            <ModalHeader closeModal={closeModal} />
            <Form onSubmit={handleSignInSubmit}>
              <Input
                type="text"
                size="User"
                placeholder="Username"
                maxLength={11}
                required
              />
              <Input
                type="password"
                size="User"
                placeholder="Password"
                required
              />
              <ButtonContainer>
                <Button type="submit" size="Small" onClick={handleSignInSubmit}>
                  Log In
                </Button>
              </ButtonContainer>
            </Form>
            <ModalFooter
              loginText={loginText}
              toggleLink="/register"
              toggleText="Sign Up"
            />
          </Content>
        </Overlay>
      )}
    </>
  );
}

SignIn.propTypes = {
  closeModal: propTypes.func,
  showModal: propTypes.bool,
};

export default SignIn;
