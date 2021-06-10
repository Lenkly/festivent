import styled from '@emotion/styled';

const CTAButton = styled.button`
  width: auto;
  height: 20px;
  background: none;
  text-align: center;
  font-family: 'Quicksand';
  font-weight: 300;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin-bottom: 25px;
`;

export default CTAButton;
