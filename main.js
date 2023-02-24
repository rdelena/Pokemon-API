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
      console.log(partnerArray);
      console.log(pokemon.name);
      console.log(pokemon.sprites.front_default);
    })
    .catch((error) => {
      console.log(error);
    });
  populatePokemon();
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

getPokemon();
