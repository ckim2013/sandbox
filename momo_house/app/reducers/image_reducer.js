import { GET_IMAGE } from '../actions/image_actions';

export const PokemonUrlReducer = (state = null, action) => {
  switch (action.type) {
    case GET_IMAGE:
      return action.pokeUrl;
    default:
      return state;
  }
};
