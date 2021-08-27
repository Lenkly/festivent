import React from 'react';
import Checkbox from '../components/Checkbox';
import Favourite from '../assets/Favourite';

export default {
  title: 'Checkbox',
};

export const HeartCheckbox = () => (
  <Checkbox
    label="Testi McTestface"
    icon={<Favourite />}
    onFavouriteClick={() => console.log('click')}
  />
);
