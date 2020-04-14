import styled from '@emotion/styled';

const Profileicon = styled.div`
  height: ${(props) => setHeight(props.size)};
  width: ${(props) => setWidth(props.size)};
  $border: ${(props) => setBorder(props.size)};
  border: solid $border #707070;
  border-radius: 50%;
`;

const iconSize = {
  Nav: { height: '21px', width: '21px', border: '1px' },
  Profile: { height: '90px', width: '90px', border: '1px' },
};

function setHeight(size) {
  return iconSize[size].height;
}

function setWidth(size) {
  return iconSize[size].width;
}

function setBorder(size) {
  return iconSize[size].border;
}

export default Profileicon;
