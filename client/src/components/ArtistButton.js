import styled from '@emotion/styled';

const ArtistButton = styled.button`
  font-size: 0.75rem;
  background: transparent;
  padding: 9px 8px;
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: 9px;
  text-transform: uppercase;
  box-shadow: 0 0 0px 100px ${(props) => props.theme.colors.background};
`;

export default ArtistButton;
