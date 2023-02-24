let rivalArray = [];
let partnerArray = [];

const getPokemon = () => {
  const maxPokemon = 150;
  const randomPokemon = Math.floor(Math.random() * maxPokemon);
  const otherPoke = Math.floor(Math.random() * maxPokemon);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    .then((res) => res.json())
    .then((pokemon) => {
      rivalArray.push(pokemon);
      const markup = `<li>${pokemon.name}<li>
      <img src="${pokemon.sprites.front_default}">`

      document.querySelector('ul').insertAdjacentHTML('beforeend', markup);

      console.log(rivalArray);
      console.log(pokemon.name);
    })
    .catch((error) => {
      console.log(error);
    });
  fetch(`https://pokeapi.co/api/v2/pokemon/${otherPoke}`)
    .then((res) => res.json())
    .then((pokemon) => {
      partnerArray.push(pokemon);
      
      const markup = `<li>${pokemon.name}<li>
      <img src="${pokemon.sprites.back_default}">`

      document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
      console.log(partnerArray);
      console.log(pokemon.name);
    })
    .catch((error) => {
      console.log(error);
    });
  // populatePokemon();
};

// const populatePokemon = () => {
//   const pokeContainer = document.querySelector(".displayPokemon");
//   pokeContainer.innerHTML = "";
//   rivalArray.forEach((pokemon) => {
//     const li = document.createElement("li");

//     const rivalImg = document.createElement("img");
//     rivalImg.classList.add("image");
//     rivalImg.src = pokemon.sprites.front_default;
//     li.appendChild(rivalImg);
//     pokeContainer.appendChild(li);
//   });
//   //   partnerArray.forEach((pokemon) => {});
// };

// const partnerMoves = [];
//   for (let i = 0; i < 4; i++) {
//     const randomMoves = Math.floor(Math.random() * pokemon.moves.length);
//   }

getPokemon();
