import styled from '@emotion/styled';

const GenreButton = styled.button`
  ${(props) => (props.selected ? 'border: solid 1px #fff700' : 'border: none;')}
  width: 8.3rem;
  height: 2.75rem;
  color: #fff;
  font-family: 'Quicksand Book', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  background: transparent;
  border-radius: 1rem;
  padding-top: 5px;
  margin-top: 10px;
  box-shadow: 0 0 0px 50px #1d1d1d;
`;

export default GenreButton;
