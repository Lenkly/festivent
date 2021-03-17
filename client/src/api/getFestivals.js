async function getFestivals({ selectedGenres }) {
  const fetchRoute =
    '/api/festivals?genres_like=' + selectedGenres.join('&genres_like=');
  const response = await fetch(fetchRoute);
  const festivals = await response.json();
  return festivals;
}

export default getFestivals;
