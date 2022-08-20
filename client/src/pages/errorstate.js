import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import AnimationContainer from '../components/layout/AnimationContainer';
import { Content, FlexContainer } from '../components/layout/Containers';
import { AgainText } from './matches';
import Button from '../components/buttons/Button';
import CalcIcon from '../components/CalcIcon';
import { colorChange } from '../animation/backgrounds';

const AnimatedCalcIcon = styled(CalcIcon)`
  height: 150px;
  width: 150px;
  font-size: ${(props) => props.theme.fontsize.xxxxl};
  box-shadow: 0 0 0.42em;
  animation: ${colorChange} 20s infinite alternate;
`;

function Errorstate() {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate('/welcome');
  };

  return (
    <Content>
      <AnimationContainer>
        <div style={{ paddingTop: '150px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '50px',
            }}
          >
            <AnimatedCalcIcon color="unknown">404</AnimatedCalcIcon>
          </div>
          <AgainText style={{ marginBottom: '50px' }}>
            Oh no, the page you tried to reach isn&apos;t available!
          </AgainText>
          <FlexContainer justifyContent="center" m="0 0 45px">
            <Button onClick={handleReset} size="Medium">
              Bring me back
            </Button>
          </FlexContainer>
        </div>
      </AnimationContainer>
    </Content>
  );
}

export default Errorstate;
