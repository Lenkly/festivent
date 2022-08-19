import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import AnimationContainer from './layout/AnimationContainer';
import Button from './buttons/Button';
import { AgainText } from '../pages/matches';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 45px;
`;

function Error() {
  const navigate = useNavigate();

  const handleAgainClick = () => {
    if (sessionStorage.getItem('SelectedGenres') !== null) {
      sessionStorage.removeItem('SelectedGenres');
    }
    if (sessionStorage.getItem('selectedFestival') !== null) {
      sessionStorage.removeItem('selectedFestival');
    }
    if (sessionStorage.getItem('selectedFestivalQuote') !== null) {
      sessionStorage.removeItem('selectedFestivalQuote');
    }
    navigate('/genres');
  };

  return (
    <AnimationContainer>
      <div style={{ paddingTop: '200px' }}>
        <AgainText>
          This supposedly wasn&apos;t what you were trying to do?
        </AgainText>
        <ButtonWrapper>
          <Button onClick={handleAgainClick} size="Medium">
            Start Matching!
          </Button>
        </ButtonWrapper>
      </div>
    </AnimationContainer>
  );
}

export default Error;
