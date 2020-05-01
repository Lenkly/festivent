function quota(festivalGenres, selectedGenres) {
  const calculatedQuotes = new Array();
  festivalGenres.forEach((festivalGenre) => {
    const sameGenres = festivalGenre.filter((genre) =>
      selectedGenres.includes(genre)
    );
    console.log(sameGenres);
    const quote = Math.round((sameGenres.length / festivalGenre.length) * 100);
    console.log(quote);
    calculatedQuotes.push(quote);
  });
  return calculatedQuotes;
}

export default quota;
