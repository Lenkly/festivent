import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Content from '../components/layout/Content';
import Form from '../components/layout/Form';
import ProfileIcon from '../components/ProfileIcon';
import { SettingsInput } from '../components/Input';
import Button from '../components/buttons/Button';
import NavigationBar from '../components/NavigationBar';
import Icon from '../assets/festivent-profile.svg';
import AnimationContainer from '../components/layout/AnimationContainer';
import Toggle from '../components/Toggle';

/* STYLES */

const IconContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
  padding: 30px 0 35px 25px;
`;

const ChangeIconButton = styled.button`
  margin-left: 15px;
  margin-bottom: 0;
  border: none;
  background: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text};
  font-weight: 300;
  font-size: 1.25rem;
  align-self: flex-end;
  cursor: pointer;
`;

const SwitchContainer = styled.div`
  display: flex;
  padding: 45px 0 50px;
  justify-content: space-between;
`;

const SwitchText = styled.span`
  font-weight: 300;
  font-size: 1.25rem;
  margin-right: 15px;
  padding-top: 5px;
`;

/* CONTENT */

function Settings({ onThemeChange, theme }) {
  const [files, setFiles] = useState(null);
  const hiddenFileInput = useRef(null);

  console.log('Files:', files);

  const handleUpload = () => {
    hiddenFileInput.current.click();
  };

  return (
    <Content>
      <AnimationContainer>
        <NavigationBar loggedIn />
        <div style={{ paddingTop: '40px' }}>Settings</div>
        <IconContainer>
          <ProfileIcon size="Profile" src={Icon} />
          <ChangeIconButton onClick={handleUpload}>Edit Photo</ChangeIconButton>
          <input
            type="file"
            onChange={(event) => setFiles(event.target.files[0])}
            accept=".png, .jpg, .jpeg"
            style={{ display: 'none' }}
            ref={hiddenFileInput}
          />
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
          <Toggle checked={theme} toggleHandler={onThemeChange} />
        </SwitchContainer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button size="Small">Log Out</Button>
        </div>
      </AnimationContainer>
    </Content>
  );
}
Settings.propTypes = {
  onThemeChange: PropTypes.func,
  theme: PropTypes.object,
};

export default Settings;
