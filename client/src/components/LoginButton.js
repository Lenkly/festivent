import styled from '@emotion/styled';

const LoginButton = styled.button`
  font-size: 15px;
  font-family: 'Quicksand Light';
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.texthighlight};
  border: none;
  background: none;
  cursor: pointer;
`;

export default LoginButton;
