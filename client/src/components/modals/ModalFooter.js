import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const LoginLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const LoginText = styled.p`
  font-weight: 300;
  font-size: 1rem;
  margin-right: 10px;
  flex-shrink: 0;
`;

const LoginToggle = styled(Link)`
  font-size: 1rem;
  font-weight: 300;
  text-decoration: none;
  color: ${(props) => props.theme.colors.texthighlight};
  cursor: pointer;
  flex-shrink: 0;
`;

function ModalFooter({ loginText, toggleLink, toggleText }) {
  return (
    <>
      <LoginLink>
        <LoginText>{loginText}</LoginText>
        <LoginToggle to={toggleLink}>{toggleText}</LoginToggle>
      </LoginLink>
    </>
  );
}

ModalFooter.propTypes = {
  loginText: propTypes.string,
  toggleLink: propTypes.string,
  toggleText: propTypes.string,
};

export default ModalFooter;
