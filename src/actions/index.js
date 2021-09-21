import flats from '../../data/flats';

export function setFlats() {
  // API calls, For now simulate a DB
  return {
    type: 'SET_FLATS',
    payload: flats
  }
}
