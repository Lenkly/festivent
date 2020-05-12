import React from 'react';

const useModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return {
    showModal,
    toggleModal,
  };
};

export default useModal;
