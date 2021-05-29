import React from 'react';
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

function SignUp({ closeModal }) {
  const history = useHistory();
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [newUser, { error }] = useMutation(addUser);

  const loginText = `Already have an Account?`;

  async function handleSignUpSubmit(event) {
    event.preventDefault();
    await newUser({ userName, userEmail, userPassword });
    history.push(`/profile/${newUser.id}`);
    alert('a new User has been created:' + userName);
  }

  return (
    <Content>
      <ModalHeader onSignUp closeModal={closeModal} />
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
  );
}

SignUp.propTypes = {
  closeModal: propTypes.func,
};

export default SignUp;
