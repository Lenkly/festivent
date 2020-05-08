async function getGenres() {
  const response = await fetch('/api/festivals');
  const festivals = await response.json();

  const genreArray = festivals.reduce((newArray, festivalGenres) => {
    if (newArray.indexOf(festivalGenres.genres) === -1) {
      newArray.push(festivalGenres.genres);
    }
    return [...new Set([].concat(...newArray))].sort();
  }, []);

  return genreArray;
}
export default getGenres;
