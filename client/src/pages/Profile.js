import React from 'react';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import SettingsNavigation from '../components/navigation/SettingsNavigation';
import ProfileIcon from '../components/ProfileIcon';
import Icon from '../assets/festivent-profile.svg';

const ProfilePicture = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

const UserName = styled.div`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 20px;
  word-wrap: break-word;
  hyphens: auto;
`;

const UserDetail = styled.div`
  text-align: center;
  font-family: 'Quicksand Light';
  font-size: 14px;
  margin-bottom: 30px;
`;

function Profile() {
  return (
    <Content>
      <SettingsNavigation />
      <ProfilePicture>
        <ProfileIcon size="Profile" src={Icon} />
      </ProfilePicture>
      <UserName>Keanefan</UserName>
      <UserDetail>Member since: 06/04/2020</UserDetail>
    </Content>
  );
}

export default Profile;
