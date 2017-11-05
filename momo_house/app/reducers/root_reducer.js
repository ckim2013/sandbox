import { combineReducers } from 'redux';
import { PokemonUrlReducer } from './image_reducer';

const RootReducer = combineReducers({
  pokeUrl: PokemonUrlReducer
});

export default RootReducer;
