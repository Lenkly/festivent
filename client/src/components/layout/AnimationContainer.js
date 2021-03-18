import styled from '@emotion/styled';
import { fadeIn } from '../../animation/fades';

const AnimationContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out 1 forwards;
  animation-delay: 0.25s;
`;

export default AnimationContainer;
