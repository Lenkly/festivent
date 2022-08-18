import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { getUser } from '../api/getUser';
import { Content } from '../components/layout/Containers';
import NavigationBar from '../components/NavigationBar';
import ProfileIcon from '../components/ProfileIcon';
import Icon from '../assets/festivent-profile.svg';
import Error from '../components/Error';
import Loading from '../components/Loading';

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
  font-weight: ${(props) => props.theme.fontweight.light};
  font-size: ${(props) => props.theme.fontsize.xs};
  margin-bottom: 30px;
`;

function Profile() {
  const { status, data: userdata } = useQuery('users', getUser);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return <Error />;
  }

  let currentDate;
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getDate();
  let currentYear = currentDate.getDate();

  return (
    <Content>
      <NavigationBar onProfile />
      <ProfilePicture>
        <ProfileIcon size="Profile" src={Icon} />
      </ProfilePicture>
      {userdata.map((user) => (
        <div key={user.id}>
          <UserName>{user.userName}</UserName>
          <UserDetail>
            Member since: {currentDay}/{currentMonth}/{currentYear}
          </UserDetail>
        </div>
      ))}
    </Content>
  );
}

export default Profile;
