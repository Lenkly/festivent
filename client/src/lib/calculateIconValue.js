function calculateIconValue(quoteValue) {
  switch (true) {
    case quoteValue >= 0 && quoteValue <= 15:
      return 'almostnone';
    case quoteValue > 15 && quoteValue <= 25:
      return 'verylow';
    case quoteValue > 25 && quoteValue <= 35:
      return 'low';
    case quoteValue > 35 && quoteValue <= 45:
      return 'substandard';
    case quoteValue > 45 && quoteValue <= 55:
      return 'okay';
    case quoteValue > 55 && quoteValue <= 65:
      return 'average';
    case quoteValue > 65 && quoteValue <= 75:
      return 'moderate';
    case quoteValue > 75 && quoteValue <= 85:
      return 'high';
    case quoteValue > 85 && quoteValue <= 95:
      return 'veryhigh';
    case quoteValue > 95 && quoteValue <= 100:
      return 'perfect';
    default:
      return '???';
  }
}

export default calculateIconValue;
