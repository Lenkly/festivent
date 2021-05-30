import React, { useState } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import Content from '../layout/Content';
import Button from '../Button';
import Input from '../Input';
import Form from '../layout/Form';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { addUser } from '../../api/getUser';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  border: 3px solid green;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.backgroundSignup};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

function SignUp({ renderOnModal, closeModal, showModal }) {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [newUser, { error }] = useMutation(addUser);

  const loginText = `Already have an Account?`;

  async function handleSignUpSubmit(event) {
    event.preventDefault();
    await newUser({ userName, userEmail, userPassword });
    history.push(`/profile/${newUser.id}`);
    alert('a new User has been created:' + userName);
  }

  return (
    <>
      {showModal && (
        <Overlay>
          <Content>
            <ModalHeader
              renderOnModal={renderOnModal}
              onSignUp
              closeModal={closeModal}
            />
            <Form onSubmit={handleSignUpSubmit}>
              {error && (
                <span>
                  Oh no, something bad happened
                  <span role="img" aria-label="sadface">
                    😢
                  </span>
                  <br />
                  Please try again.
                </span>
              )}
              <Input
                type="text"
                size="User"
                value={userName}
                placeholder="Username"
                onChange={(event) => setUserName(event.target.value)}
                maxLength={11}
                required
              />
              <Input
                type="email"
                size="User"
                value={userEmail}
                placeholder="E-Mail"
                onChange={(event) => setUserEmail(event.target.value)}
                required
              />
              <Input
                type="password"
                size="User"
                value={userPassword}
                placeholder="Password"
                onChange={(event) => setUserPassword(event.target.value)}
                required
              />
              <ButtonContainer>
                <Button type="submit" size="Small" onClick={handleSignUpSubmit}>
                  Sign Up
                </Button>
              </ButtonContainer>
            </Form>
            <ModalFooter
              loginText={loginText}
              toggleLink="/signin"
              toggleText="Log In"
            />
          </Content>
        </Overlay>
      )}
    </>
  );
}

SignUp.propTypes = {
  renderOnModal: propTypes.bool,
  closeModal: propTypes.func,
  showModal: propTypes.bool,
};

export default SignUp;
