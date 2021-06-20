import React from 'react';
import GenreBadge from '../components/GenreBadge';

export default {
  title: 'GenreBadge',
};

export const Nonselected = () => <GenreBadge genre="Hard Style" />;

export const Selected = () => <GenreBadge selected genre="Softcore" />;
