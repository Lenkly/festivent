import styled from '@emotion/styled';

const ProfileIcon = styled.img`
  height: ${(props) => iconSize[props.size].height};
  width: ${(props) => iconSize[props.size].width};
  border: solid #707070;
  border-width: ${(props) => iconSize[props.size].border};
  border-radius: 100%;
`;

const iconSize = {
  Nav: { height: '21px', width: '21px', border: '1px' },
  Profile: { height: '90px', width: '90px', border: '3px' },
};

export default ProfileIcon;
