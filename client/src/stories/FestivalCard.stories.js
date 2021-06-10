import React from 'react';
import FestivalCard from '../components/FestivalCard';
import calculateIconValue from '../lib/calculateIconValue';

export default {
  title: 'FestivalCard',
};

export const Festivalcard = () => (
  <FestivalCard
    color={calculateIconValue(95)}
    quote="95"
    name="Best Festival ever"
    venue="in my yard"
    place="at home"
  />
);
