import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { FlexColumn, Content } from '../components/layout/Containers';
import NavigationBar from '../components/NavigationBar';
import AnimationContainer from '../components/layout/AnimationContainer';
import calculateIconValue from '../lib/calculateIconValue';
import CreateModal from '../components/modals/CreateModal';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Ticket from '../assets/Ticket';
import Favourite from '../assets/Favourite';
import FestivalDetailHeader from '../components/FestivalDetailHeader';
import CTAButton from '../components/buttons/CTAButton';
import Checkbox from '../components/Checkbox';
import { useParams } from 'react-router-dom';
import FestivalLineup from '../components/FestivalDetailLineup';
import usePersistentState from '../hooks/usePersistentState';
import Toast from '../components/Toast';

/* STYLES */

const ButtonContainer = styled(FlexColumn)`
  padding-top: 43px;
`;

/* CONTENT */

function Details({ userLoggedIn }) {
  const [isShowing, setShowing] = useState(false);
  const { festivalId } = useParams();
  const { status, data: festivaldata } = useQuery('festival', getFestivalbyId);
  const [selectedGenres] = usePersistentState('SelectedGenres', []);
  const [loginSwitch, setLoginSwitch] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  async function getFestivalbyId() {
    const response = await fetch(`/api/festivals?id=${festivalId}`);
    const festival = await response.json();
    return festival;
  }

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return <Error />;
  }

  if (festivaldata) {
    Object.defineProperty(festivaldata[0], 'quote', {
      value: sessionStorage.getItem('selectedFestivalQuote'),
      writable: true,
    });
  }
  // if there is no data for quote, color becomes "unknown" --> which occasionally created an error, because it wasn't defined

  const closeModal = () => {
    setShowing(false);
    setLoginSwitch(false);
  };

  const openModal = () => {
    setShowing(!isShowing);
  };

  const triggerToast = () => {
    setToastOpen(true);
  };

  const hideToast = () => {
    setToastOpen(false);
  };

  const handleLogin = () => {
    if (loginSwitch === false) {
      setLoginSwitch(true);
    } else {
      setLoginSwitch(false);
    }
  };

  const allGenres = festivaldata.map((festival) =>
    festival.genres.map((item) => item)
  );

  const selects = allGenres[0].map((item) => {
    const range = {};
    range.name = item;
    range.selected = selectedGenres.includes(item);
    return range;
  });

  const handleBackClick = () => {
    sessionStorage.removeItem('selectedFestival');
    sessionStorage.removeItem('selectedFestivalQuote');
  };

  return (
    <>
      <Content>
        <AnimationContainer>
          <div style={{ marginBottom: '50px' }}>
            <NavigationBar onBackButtonClick={handleBackClick} />
            {festivaldata.map((festival) => (
              <div key={festival.id}>
                <FestivalDetailHeader
                  color={calculateIconValue(festival.quote)}
                  quote={festival.quote}
                  name={festival.name}
                  date={festival.date}
                  venue={festival.venue}
                  place={festival.place}
                  description={festival.description}
                  genres={selects}
                />
                <FestivalLineup artists={festival.artists} />
                <ButtonContainer align="Start">
                  {userLoggedIn ? (
                    <Checkbox
                      label="Add to Favourites"
                      icon={<Favourite />}
                      onClick={triggerToast}
                    />
                  ) : (
                    <CTAButton onClick={openModal}>
                      <Favourite />
                      &ensp;Add to Favourites
                    </CTAButton>
                  )}
                  <a
                    href={festival.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <CTAButton>
                      <Ticket />
                      &ensp;Buy Tickets
                    </CTAButton>
                  </a>
                </ButtonContainer>
                <Toast
                  isOpen={toastOpen}
                  borderColor={calculateIconValue(festival.quote)}
                  hideToast={hideToast}
                  text="Saved as Favourite!"
                />
              </div>
            ))}
          </div>
        </AnimationContainer>
      </Content>
      <CreateModal
        renderOnModal
        showModal={isShowing}
        closeModal={closeModal}
        loginState={loginSwitch}
        handleSwitch={handleLogin}
      />
    </>
  );
}

Details.propTypes = {
  userLoggedIn: PropTypes.bool,
};

export default Details;
