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

const Heading = styled.div`
  margin-top: 40px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 1 forwards;
  animation-delay: 0.25s;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  padding: 0 0 0 25px;
  margin: 30px 0 35px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 1 forwards;
  animation-delay: 0.25s;
`;

const ChangeIcon = styled.button`
  margin-left: 15px;
  margin-bottom: 0;
  border: none;
  background: none;
  text-transform: uppercase;
  font-family: 'Quicksand Light';
  font-size: 20px;
  align-self: flex-end;
`;

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 45px 0 50px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 1 forwards;
  animation-delay: 0.25s;
`;

const SwitchText = styled.div`
  font-family: 'Quicksand Light';
  font-size: 20px;
  margin-right: 15px;
  padding-top: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 1 forwards;
  animation-delay: 0.25s;
`;

function Settings({ onThemeChange, theme }) {
  return (
    <Content>
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
        <SwitchText>Switch to Darkmode</SwitchText>
        <ThemeSwitch onChange={onThemeChange} value={theme} />
      </SwitchContainer>
      <ButtonContainer>
        <Button size="Small">Log Out</Button>
      </ButtonContainer>
    </Content>
  );
}
Settings.propTypes = {
  onThemeChange: PropTypes.func,
  theme: PropTypes.object,
};

export default Settings;
