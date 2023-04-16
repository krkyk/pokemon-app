export function getAllPokemon(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => Promise.resolve(data));
}

export function getPokemon(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => Promise.resolve(data));
}
