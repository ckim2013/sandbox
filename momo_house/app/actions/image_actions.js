import { getImage } from '../utils/image_api_util';

export const GET_IMAGE = 'GET_IMAGE';

export const obtainImage = pokeUrl => ({
  type: GET_IMAGE,
  pokeUrl
});

export const fetchImage = id => dispatch => (
  getImage(id)
  .then(response => dispatch(obtainImage(response)))
);
