import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import propTypes from 'prop-types';
import Content from '../layout/Content';
import Button from '../Button';
import { Input } from '../Input';
import Form from '../layout/Form';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { addUser } from '../../api/getUser';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import AnimationContainer from '../layout/AnimationContainer';
import Error from '../Error';

const registerStyle = (props) => css`
  background: ${props.theme.colors.backgroundSignup};
`;

const loginStyle = (props) => css`
  background: ${props.theme.colors.backgroundLogin};
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  ${(props) => (props.hasAccount ? loginStyle(props) : registerStyle(props))}
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.25s linear;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

function CreateModal({
  renderOnModal,
  closeModal,
  showModal,
  loginState,
  handleSwitch,
}) {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [newUser, { error }] = useMutation(addUser);

  async function handleSignUpSubmit(event) {
    event.preventDefault();
    await newUser({ userName, userEmail, userPassword });
    history.push(`/profile/${newUser.userName}`);
    // alert('a new User has been created:' + userName);
  }

  async function handleSignInSubmit(event) {
    event.preventDefault();
    alert('Hello back, handsome!');
  }

  return (
    <>
      {showModal && (
        <Overlay hasAccount={loginState}>
          <AnimationContainer>
            <Content>
              {loginState == true ? (
                <>
                  <ModalHeader
                    renderOnModal={renderOnModal}
                    closeModal={closeModal}
                  />
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
                      <Button
                        type="submit"
                        size="Small"
                        onClick={handleSignInSubmit}
                        loginbutton={true}
                      >
                        Log In
                      </Button>
                    </ButtonContainer>
                  </Form>
                  <ModalFooter
                    onClick={handleSwitch}
                    loginText="Don't have an Account?"
                    toggleLink="#"
                    toggleText="Sign Up"
                  />
                </>
              ) : (
                <>
                  <ModalHeader
                    renderOnModal={renderOnModal}
                    onSignUp
                    closeModal={closeModal}
                  />
                  <Form onSubmit={handleSignUpSubmit}>
                    {error && <Error />}
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
                      <Button type="submit" size="Small">
                        Sign Up
                      </Button>
                    </ButtonContainer>
                  </Form>
                  <ModalFooter
                    onClick={handleSwitch}
                    loginText="Already have an Account?"
                    toggleLink="#"
                    toggleText="Log In"
                  />
                </>
              )}
            </Content>
          </AnimationContainer>
        </Overlay>
      )}
    </>
  );
}

CreateModal.propTypes = {
  renderOnModal: propTypes.bool,
  closeModal: propTypes.func,
  showModal: propTypes.bool,
  loginState: propTypes.bool,
  handleSwitch: propTypes.func,
};

export default CreateModal;
