//deprecated
export async function getFestivalbyId() {
  const response = await fetch(
    '/api/festivals?id=' + sessionStorage.getItem('selectedFestival')
  );
  const festivals = await response.json();
  return festivals;
}

export async function getFestivalbyName(festivalName) {
  const response = await fetch(`/api/festivals?name=${festivalName}`);
  const festivalbyName = await response.json();
  return festivalbyName;
}
