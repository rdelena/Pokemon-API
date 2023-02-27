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
      const markup = `<div class = "rival">
      <div class = "rivalInfo">
      <p>${pokemon.name.toUpperCase()} </p>
      <p>Lv50</p>
      <p>HP: ${pokemon.stats[0].base_stat + 60}/${
        pokemon.stats[0].base_stat + 60
      } <p>
      </div>
      <img src="${pokemon.sprites.front_default}">
      </div>`;

      document
        .querySelector(".displayPokemon")
        .insertAdjacentHTML("beforeend", markup);

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

      const markup = `<div class = "partner">
      <img src="${pokemon.sprites.back_default}">
      <div class = "partnerInfo">
      <p>${pokemon.name.toUpperCase()}</p>
      <p>Lv50</p>
      <p>HP: ${pokemon.stats[0].base_stat + 60}/${
        pokemon.stats[0].base_stat + 60
      } <p>
      <p>EXP</p>
      </div>
      <div class = "partnerMoves">
      </div>
      </div>
      `;

      document
        .querySelector(".displayPokemon")
        .insertAdjacentHTML("beforeend", markup);
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

// for (let i = 0; i < 4; i++) {
//   const randomMoves = Math.floor(Math.random() * pokemon.moves.length);
//   const move = pokemon.moves[randomMoves].move.name;
// }

getPokemon();
