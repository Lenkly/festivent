import styled from '@emotion/styled';
import calcColor from '../lib/calcColor';

const CalcIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  border-color: ${(props) => {
    return calcColor[props.color].colors;
  }};
  border: solid 3px;
  border-radius: 100%;
  font-size: ${(props) => props.theme.fontsize.xl};
  color: ${(props) => calcColor[props.color].colors};
  background: none;
  font-family: 'Rubik', sans-serif;
  box-shadow: 0 0 0.25em;
`;

export default CalcIcon;
