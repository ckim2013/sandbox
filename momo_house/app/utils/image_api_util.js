export const getImage = ({ pokeId }) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${Number(pokeId)}/`)
         .then(response => response.json())
         .then(json => json.sprites.front_default);
};
