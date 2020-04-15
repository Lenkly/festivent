import styled from '@emotion/styled';

const Button = styled.button`
  cursor: pointer;
  font-family: 'Quicksand Book', sans-serif;
  padding: 12px 0 7px 0;
  font-size: 20px;
  width: 217px;
  text-transform: uppercase;
  color: #fff;
  background: #1d1d1d;
  background-clip: padding-box;
  border: none;
  border-radius: 1rem;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 219px;
    height: 39px;
    top: 50%;
    transform: translateY(-50%);
    left: -0.5%;
    z-index: -1;
    margin: 0;
    border-radius: 1rem;
    background: linear-gradient(
      to right,
      #fff700,
      #ff9100,
      #ff0084,
      #ff00f2,
      #bb00ff,
      #7700ff,
      #006aff,
      #00ccff,
      #00ff6a,
      #59ff00,
      #fff700
    );
  }
`;

export default Button;
