import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import CloseButton from './buttons/CloseButton';
import Close from '../assets/Close';
import calcColor from '../lib/calcColor';

const ToastContainer = styled.div`
  border-radius: 20px;
  border: 1px solid;
  border-color: ${(props) => calcColor[props.borderColor].colors};
  overflow: hidden;
  position: absolute;
  left: 50%;
  z-index: 100;
  top: ${(props) => (props.isOpen ? '90%' : '-80px')};
  transition: top 0.5s ease;
  transform: translateX(-50%);
  box-shadow: 0 0 0.1em;
`;

const ToastBody = styled.div`
  padding: 0.5rem 0.5rem 0.25rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors.backgroundLogin};
`;

const ToastText = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
  margin-right: 20px;
`;

function Toast({ isOpen, borderColor, hideToast, text }) {
  return (
    <ToastContainer isOpen={isOpen} borderColor={borderColor}>
      <ToastBody>
        <ToastText>{text}</ToastText>
        <CloseButton onClick={hideToast}>
          <Close />
        </CloseButton>
      </ToastBody>
    </ToastContainer>
  );
}

Toast.propTypes = {
  isOpen: PropTypes.bool,
  borderColor: PropTypes.string,
  hideToast: PropTypes.func,
  text: PropTypes.string,
};

export default Toast;
