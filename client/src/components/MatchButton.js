import styled from '@emotion/styled';
import { Button } from 'Button';

const MatchButton = styled(Button)`
  padding: ${(props) => buttonSize[props.size].padding};
  font-size: ${(props) => buttonSize[props.size].fontsize};
  width: 282px;

  &:before {
    width: 284px;
    height: 52px;
  }
`;

const buttonSize = {
  Medium: { padding: '11px 0 8px 0', fontsize: '25px' },
  Large: { padding: '13px 0 9px 0', fontsize: '34px' },
};

export default MatchButton;
