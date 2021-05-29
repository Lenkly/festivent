import styled from '@emotion/styled';
import React from 'react';
import propTypes from 'prop-types';
import Heart from '../../assets/festivent-start.png';
import Close from '../../assets/Close';

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 45px;
`;

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const TeaserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flew-direction: column;
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
  font-size: 1.25rem;
  line-height: 1.3;
`;

function ModalHeader({ onSignUp, closeModal }) {
  return (
    <>
      <CloseButtonContainer>
        <CloseButton onClick={closeModal}>
          <Close />
        </CloseButton>
      </CloseButtonContainer>
      {onSignUp ? (
        <TeaserContainer forSignUp>
          <Logo src={Heart} alt="festivent logo" />
          <TeaserText>
            Add favourites to your list and discover many more features when
            signed up!
          </TeaserText>
        </TeaserContainer>
      ) : (
        <TeaserContainer>
          <Logo src={Heart} alt="festivent logo" />
        </TeaserContainer>
      )}
    </>
  );
}

ModalHeader.propTypes = {
  onSignUp: propTypes.bool,
  closeModal: propTypes.func,
};

export default ModalHeader;
