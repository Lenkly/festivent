import styled from '@emotion/styled';

const ProfileIcon = styled.img`
  height: ${(props) => iconSize[props.size].height};
  width: ${(props) => iconSize[props.size].width};
  border: solid #707070;
  border-width: ${(props) => iconSize[props.size].border};
  border-radius: 100%;
  box-shadow: 0 0 0.25em ${(props) => iconSize[props.size].shadowcolor};
`;

const iconSize = {
  Nav: { height: '21px', width: '21px', border: '1px', shadowcolor: '#1d1d1d' },
  Profile: {
    height: '90px',
    width: '90px',
    border: '3px',
    shadowcolor: '#707070',
  },
};

export default ProfileIcon;
