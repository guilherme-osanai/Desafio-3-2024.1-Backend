//função de mudar imagem pelo id e pela url
function changeImage(id, url) {
    document.getElementById(id).src = url;
  }
  //função de mudar texto pelo id e pelo texto
  function changeText(id, text) {
    document.getElementById(id).innerText = text;
  }
  
  // Daqui para baixo voce ira escrever
  // o código para resolver o desafio
  
let primeiroPokemon = 12;


// Função para buscar dados dos Pokemons na PokeAPI
async function fetchPokemonData(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados do Pokemon:', error);
    return null;
  }
}

// Atualiza os dados do Pokemon na página
async function updatePokemon(pokemonName) {
  const pokemonData = await fetchPokemonData(pokemonName);
  if (pokemonData) {
    changeText('name', pokemonData.name);
    changeImage('img_sprite_front_default', pokemonData.sprites.front_default);
  }
}

updatePokemon(primeiroPokemon);

// Carrega o Pokemon anterior
function previousPokemon() {
  if (primeiroPokemon > 12){
    primeiroPokemon -= 1;
  updatePokemon(primeiroPokemon)
  } else {
    primeiroPokemon = 120;
    updatePokemon(primeiroPokemon)
  }
}
// Carrega o Pokemon seguinte
function nextPokemon() {
  if (primeiroPokemon < 120){
  primeiroPokemon += 1;
  updatePokemon(primeiroPokemon);
  } else {
    primeiroPokemon = 12;
    updatePokemon(primeiroPokemon)
  }
}
