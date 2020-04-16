import React from 'react';
import Input from '../components/Input';

export default {
  title: 'Input',
};

export const Name = () => <Input type="text" size="Name" maxLength={14} />;

export const Username = () => (
  <Input type="text" size="User" placeholder="Username" maxLength={14} />
);

export const Email = () => (
  <Input type="email" size="User" placeholder="E-Mail" />
);

export const Password = () => (
  <Input type="password" size="User" placeholder="Password" />
);
