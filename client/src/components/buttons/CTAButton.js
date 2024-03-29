import styled from '@emotion/styled';

const CTAButton = styled.button`
  width: auto;
  background: none;
  text-align: center;
  font-weight: ${(props) => props.theme.fontweight.light};
  font-size: ${(props) => props.theme.fontsize.m};
  color: ${(props) => props.theme.colors.text};
  border: none;
  cursor: pointer;
  margin-bottom: 25px;
  :hover {
    color: ${(props) => props.theme.colors.texthighlight};
    transition: background 0.5s ease;
  }
`;

export default CTAButton;
