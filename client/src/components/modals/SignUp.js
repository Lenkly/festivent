import React from 'react';
import styled from '@emotion/styled';
import Content from '../layout/Content';
import Button from '../Button';
import Input from '../Input';
import Form from '../layout/Form';
import LoginButton from '../LoginButton';
import { useHistory } from 'react-router-dom';
import Heart from '../../assets/festivent-start.png';
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

  async function handleSignUpClick(event) {
    event.preventDefault();
    const user = {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
    };
    const newUser = await addUser(user);
    history.push(`/user/${newUser.id}`);
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
      <Form>
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
          <Button type="submit" size="Small" onSubmit={handleSignUpClick}>
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
