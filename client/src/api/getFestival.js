async function getFestival() {
  const response = await fetch(
    '/api/festivals?id=' + sessionStorage.getItem('selectedFestival')
  );
  const festivals = await response.json();
  return festivals;
}

export default getFestival;
