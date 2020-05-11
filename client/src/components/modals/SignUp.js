import React from 'react';
import styled from '@emotion/styled';
import Content from '../layout/Content';
import Button from '../Button';
import Input from '../Input';
import Form from '../layout/Form';
import LoginButton from '../LoginButton';
import Heart from '../../assets/festivent-start.png';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { addUser } from '../../api/getUser';

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
  const history = useHistory();
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [newUser, { error }] = useMutation(addUser);

  async function handleSignUpSubmit(event) {
    event.preventDefault();
    await newUser({ userName, userEmail, userPassword });
    history.push(`/profile/${newUser.id}`);
    alert('a new User has been created:' + userName);
  }

  return (
    <Content>
      <TeaserContainer>
        <Logo src={Heart} alt="festivent logo" />
        <TeaserText>
          Add favourites to your list and discover many more features when
          signed up!
        </TeaserText>
      </TeaserContainer>
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
          <Button type="submit" size="Small">
            Sign Up
          </Button>
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
