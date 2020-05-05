import styled from '@emotion/styled';

const CalcIcon = styled.button`
  height: 90px;
  width: 90px;
  border: solid ${(props) => calcColor[props.color].bordercolor};
  border-width: 3px;
  border-radius: 100%;
  font-size: 30px;
  color: ${(props) => calcColor[props.color].textcolor};
  background: none;
  font-family: 'Rubik', sans-serif;
  box-shadow: 0 0 0.25em ${(props) => calcColor[props.color].shadowcolor};
`;

const calcColor = {
  perfect: {
    bordercolor: '#ff0084',
    textcolor: '#ff0084',
    shadowcolor: '#ff0084',
  },
  veryhigh: {
    bordercolor: '#ff00f2',
    textcolor: '#ff00f2',
    shadowcolor: '#ff00f2',
  },
  high: {
    bordercolor: '#ff9100',
    textcolor: '#ff9100',
    shadowcolor: '#ff9100',
  },
  moderate: {
    bordercolor: '#FFD800',
    textcolor: '#FFD800',
    shadowcolor: '#FFD800',
  },
  average: {
    bordercolor: '#59ff00',
    textcolor: '#59ff00',
    shadowcolor: '#59ff00',
  },
  okay: {
    bordercolor: '#00ff6a',
    textcolor: '#00ff6a',
    shadowcolor: '#00ff6a',
  },
  substandard: {
    bordercolor: '#00ccff',
    textcolor: '#00ccff',
    shadowcolor: '#00ccff',
  },
  low: { bordercolor: '#006AFF', textcolor: '#006AFF', shadowcolor: '#006AFF' },
  verylow: {
    bordercolor: '#bb00ff',
    textcolor: '#bb00ff',
    shadowcolor: '#bb00ff',
  },
  almostnone: {
    bordercolor: '#7700ff',
    textcolor: '#7700ff',
    shadowcolor: '#7700ff',
  },
};

export default CalcIcon;
