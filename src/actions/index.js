import flats from '../../data/flats';

export function setFlats() {
  // imulate a DB:
  // return {
  //   type: 'SET_FLATS',
  //   payload: flats
  // }

  // API call (with reduxPromise middleware):
  // return fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
  //   .then(response => response.json())
  //   .then((data) => {
  //     return {
  //       type: 'SET_FLATS',
  //       payload: data
  //     };
  //   });

  // EQUAL TO
  const promise = fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
    .then(response => response.json());
  return {
    type: 'SET_FLATS',
    payload: promise
  };
}

export function selectFlat(flat) {
  return {
    type: 'SELECT_FLAT',
    payload: flat
  }
}
