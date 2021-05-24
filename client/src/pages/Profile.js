import React from 'react';
import styled from '@emotion/styled';
import Content from '../components/layout/Content';
import NavigationBar from '../components/NavigationBar';
import ProfileIcon from '../components/ProfileIcon';
import Icon from '../assets/festivent-profile.svg';
// import { useParams } from 'react-router-dom';

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
`;

const UserDetail = styled.div`
  text-align: center;
  font-family: 'Quicksand';
  font-weight: 300;
  font-size: 0.875rem;
  margin-bottom: 30px;
`;

function Profile() {
  // const { userId } = useParams();
  return (
    <Content>
      <NavigationBar onProfile />
      <ProfilePicture>
        <ProfileIcon size="Profile" src={Icon} />
      </ProfilePicture>
      <UserName>Keanefan</UserName>
      <UserDetail>Member since: 06/04/2020</UserDetail>
    </Content>
  );
}

export default Profile;
