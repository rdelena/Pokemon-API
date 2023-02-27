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
      const markup = `<div class = "rivalInfo">
      <p>${pokemon.name.toUpperCase()} </p>
      <p>Lv50</p>
      <p>HP: ${pokemon.stats[0].base_stat + 60}/${
        pokemon.stats[0].base_stat + 60
      } <p>
      </div>
      <img src="${pokemon.sprites.front_default}">`;

      document.querySelector(".rival").insertAdjacentHTML("beforeend", markup);

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

      const markup = `
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
      </div>`;

      document
        .querySelector(".partner")
        .insertAdjacentHTML("beforeend", markup);
      console.log(partnerArray);
      console.log(pokemon.name);
    })
    .catch((error) => {
      console.log(error);
    });
  populateAction();
};
const populateAction = () => {
  const displayAction = document.querySelector(".actionDisplay");
  displayAction.innerHTML = "";

  const divDisplay = document.createElement("div");
  divDisplay.classList.add("buttonDisplay");

  const fightButton = document.createElement("button");
  fightButton.textContent = "FIGHT";
  fightButton.addEventListener("click", () => {
    console.log(rivalArray[0].stats[0].base_stat + 60);
  });
  divDisplay.appendChild(fightButton);

  const bagButton = document.createElement("button");
  bagButton.textContent = "BAG";
  bagButton.addEventListener("click", () => {
    const bagDisplay = document.createElement("p");
    divDisplay.appendChild(bagDisplay);
    const bagText = document.createTextNode(
      `You Do Not Have Any Items! You must FIGHT OR RUN!`
    );
    divDisplay.appendChild(bagText);
    // bagButton.removeEventListener("click");
  });
  divDisplay.appendChild(bagButton);

  const pokemonButton = document.createElement("button");
  pokemonButton.textContent = "POKEMON";
  pokemonButton.addEventListener("click", () => {});
  divDisplay.appendChild(pokemonButton);

  const runButton = document.createElement("button");
  runButton.textContent = "RUN";
  runButton.addEventListener("click", () => {
    alert("YOU GOT AWAY SAFELY");
    location.reload();
  });
  divDisplay.appendChild(runButton);

  displayAction.appendChild(divDisplay);
};

const checkForWin = () => {
  if (rivalHP <= 0) {
    console.log("You Win!");
    alert("You Win!");
  } else if (partnerHP <= 0) {
    console.log("You Win!");
    alert("You Win!");
    location.reload();
  }
};

const fightBattle = () => {};
let damage;
let currentRivalHP;
let currentPartnerlHP;

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
// let moves = [];
// for (let i = 0; i < 4; i++) {
//   const randomMoves = Math.floor(Math.random() * pokemon.moves.length);
//   const move = pokemon.moves[randomMoves].move.name;
//   moves.push(move
// }

window.onload = function () {
  getPokemon();
};
