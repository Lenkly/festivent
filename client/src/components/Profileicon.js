import styled from '@emotion/styled';

const Profileicon = styled.div`
  height: ${(props) => setHeight(props.size)};
  width: ${(props) => setWidth(props.size)};
  $border: ${(props) => setBorder(props.size)};
  border: solid $border #707070;
  border-radius: 50%;
`;

const Iconsize = {
  Nav: { height: '21px', width: '21px', border: '1px' },
  Profile: { height: '90px', width: '90px', border: '1px' },
};

function setHeight(size) {
  return Iconsize[size].height;
}

function setWidth(size) {
  return Iconsize[size].width;
}

function setBorder(size) {
  return Iconsize[size].border;
}

export default Profileicon;
