import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const InvisibleButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;
`;

const LoginLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const LoginText = styled.p`
  font-weight: ${(props) => props.theme.fontweight.light};
  font-size: ${(props) => props.theme.fontsize.s};
  color: ${(props) => props.theme.colors.text};
  margin-right: 10px;
  flex-shrink: 0;
`;

const LoginToggle = styled(Link)`
  font-size: ${(props) => props.theme.fontsize.s};
  font-weight: ${(props) => props.theme.fontweight.light};
  text-decoration: none;
  color: ${(props) => props.theme.colors.texthighlight};
  cursor: pointer;
  flex-shrink: 0;
`;

function ModalFooter({ buttonClick, loginText, toggleLink, toggleText }) {
  return (
    <InvisibleButton onClick={buttonClick}>
      <LoginLink>
        <LoginText>{loginText}</LoginText>
        <LoginToggle to={toggleLink}>{toggleText}</LoginToggle>
      </LoginLink>
    </InvisibleButton>
  );
}

ModalFooter.propTypes = {
  buttonClick: propTypes.func,
  loginText: propTypes.string,
  toggleLink: propTypes.string,
  toggleText: propTypes.string,
};

export default ModalFooter;
