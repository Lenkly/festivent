import React from 'react';
import ProfileIcon from '../components/Profileicon';
import Icon from '../assets/festivent-grey.svg';

export default {
  title: 'Profile Icon',
};

export const Usericon = () => <ProfileIcon size="Profile" src={Icon} />;

export const Navigationicon = () => <ProfileIcon size="Nav" src={Icon} />;
