import styled from '@emotion/styled';
import pulse from '../animation/pulse';

const CalcIcon = styled.button`
  height: 90px;
  width: 90px;
  border: solid
    ${(props) => {
      return calcColor[props.color].colors;
    }};
  border-width: 3px;
  border-radius: 100%;
  font-size: 1.875rem;
  color: ${(props) => calcColor[props.color].colors};
  background: none;
  font-family: 'Rubik', sans-serif;
  box-shadow: 0 0 0.25em ${(props) => calcColor[props.color].colors};
  :hover {
    animation: ${pulse} 5s ease infinite;
  }
`;

const calcColor = {
  perfect: { colors: '#ff0084' },
  veryhigh: { colors: '#ff00f2' },
  high: { colors: '#ff9100' },
  moderate: { colors: '#ffd800' },
  average: { colors: '#59ff00' },
  okay: { colors: '#00ff6a' },
  substandard: { colors: '#00ccff' },
  low: { colors: '#006aff' },
  verylow: { colors: '#bb00ff' },
  almostnone: { colors: '#7700ff' },
};

export default CalcIcon;
