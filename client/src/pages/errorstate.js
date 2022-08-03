import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import AnimationContainer from '../components/layout/AnimationContainer';
import Content from '../components/layout/Content';
import { AgainText, ButtonWrapper } from './matches';
import Button from '../components/buttons/Button';
import CalcIcon from '../components/CalcIcon';
import { colorChange } from '../animation/backgrounds';

const AnimatedCalcIcon = styled(CalcIcon)`
  height: 150px;
  width: 150px;
  font-size: 3.125rem;
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
          <ButtonWrapper>
            <Button onClick={handleReset} size="Medium">
              Bring me back
            </Button>
          </ButtonWrapper>
        </div>
      </AnimationContainer>
    </Content>
  );
}

export default Errorstate;
