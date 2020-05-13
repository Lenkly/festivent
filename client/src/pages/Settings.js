import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ThemeSwitch from '../components/ThemeSwitch';
import Content from '../components/layout/Content';
import Form from '../components/layout/Form';
import ProfileIcon from '../components/ProfileIcon';
import SettingsInput from '../components/SettingsInput';
import Button from '../components/Button';
import SimpleNavigation from '../components/navigation/SimpleNavigation';
import Icon from '../assets/festivent-profile.svg';
import fadeIn from '../animation/fadein';

const Container = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 1 forwards;
  animation-delay: 0.25s;
`;

const Heading = styled.div`
  margin-top: 40px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  padding-left: 25px;
  margin: 30px 0 35px;
`;

const ChangeIcon = styled.button`
  margin-left: 15px;
  margin-bottom: 0;
  border: none;
  background: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  font-family: 'Quicksand Light';
  font-size: 20px;
  align-self: flex-end;
`;

const SwitchContainer = styled.div`
  display: flex;
  margin: 45px 0 50px;
  justify-content: space-between;
`;

const SwitchText = styled.span`
  font-family: 'Quicksand Light';
  font-size: 20px;
  margin-right: 15px;
  padding-top: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function Settings({ onThemeChange, theme }) {
  return (
    <Content>
      <Container>
        <SimpleNavigation />
        <Heading>Settings</Heading>
        <IconContainer>
          <ProfileIcon size="Profile" src={Icon} />
          <ChangeIcon>Edit Photo</ChangeIcon>
        </IconContainer>
        <Form>
          <SettingsInput
            type="text"
            size="User"
            placeholder="Username"
            maxLength={11}
          />
          <SettingsInput type="email" size="User" placeholder="E-Mail" />
          <SettingsInput type="password" size="User" placeholder="Password" />
        </Form>
        <SwitchContainer>
          <SwitchText>Use Darkmode</SwitchText>
          <ThemeSwitch onChange={onThemeChange} value={theme} />
        </SwitchContainer>
        <ButtonContainer>
          <Button size="Small">Log Out</Button>
        </ButtonContainer>
      </Container>
    </Content>
  );
}
Settings.propTypes = {
  onThemeChange: PropTypes.func,
  theme: PropTypes.object,
};

export default Settings;
