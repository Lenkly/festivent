import styled from '@emotion/styled';
import React from 'react';
import propTypes from 'prop-types';
import Heart from '../../assets/festivent-start.png';
import Close from '../../assets/Close';
import CloseButton from '../buttons/CloseButton';
import NavigationBar from '../NavigationBar';
import { FlexColumn } from '../layout/Containers';

const CloseButtonContainer = styled(FlexColumn)`
  justify-content: flex-end;
  height: 45px;
  width: 100%;
`;

const TeaserContainer = styled(FlexColumn)`
  flex-wrap: wrap;
  justify-content: center;
  padding-top: ${(props) => (props.forSignUp ? '55px' : '155px')};
  padding-bottom: ${(props) => (props.forSignUp ? '0' : '54px')};
`;

const Logo = styled.img`
  height: 30%;
  width: 30%;
`;

const TeaserText = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.fontsize.m};
  line-height: 1.3;
`;

function ModalHeader({ renderOnModal, onSignUp, closeModal }) {
  return (
    <>
      {renderOnModal ? (
        <CloseButtonContainer align="End">
          <CloseButton onClick={closeModal}>
            <Close />
          </CloseButton>
        </CloseButtonContainer>
      ) : (
        <NavigationBar />
      )}
      {onSignUp ? (
        <TeaserContainer align="Center" forSignUp>
          <Logo src={Heart} alt="festivent logo" />
          <TeaserText>
            Add favourites to your list and discover many more features when
            signed up!
          </TeaserText>
        </TeaserContainer>
      ) : (
        <TeaserContainer align="Center">
          <Logo src={Heart} alt="festivent logo" />
        </TeaserContainer>
      )}
    </>
  );
}

ModalHeader.propTypes = {
  onSignUp: propTypes.bool,
  renderOnModal: propTypes.bool,
  closeModal: propTypes.func,
};

export default ModalHeader;
