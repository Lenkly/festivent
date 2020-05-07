import styled from '@emotion/styled';

const GenreButton = styled.button`
  width: 8.3rem;
  height: 2.75rem;
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-family: 'Quicksand Book', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  background: transparent;
  border-radius: 1rem;
  padding-top: 5px;
  margin-top: 10px;
  box-shadow: 0 0 0px 50px ${(props) => props.theme.colors.background};
`;
export default GenreButton;
