function quota(festivalGenres, selectedGenres) {
  const calculatedQuotes = [];
  festivalGenres.forEach((festivalGenre) => {
    const sameGenres = festivalGenre.filter((genre) =>
      selectedGenres.includes(genre)
    );
    const quote = Math.round((sameGenres.length / festivalGenre.length) * 100);
    calculatedQuotes.push(quote);
  });
  return calculatedQuotes;
}

export default quota;
