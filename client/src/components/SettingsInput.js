import styled from '@emotion/styled';
import Input from './Input';

const SettingsInput = styled(Input)`
  display: flex;
  width: 100%;
  text-align: left;
  &::placeholder {
    text-align: left;
  }
`;

export default SettingsInput;
