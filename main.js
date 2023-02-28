let rivalArray = [];
let partnerArray = [];
let startingRivalHP = null;
let startingPartnerHP = null;

const getPokemon = () => {
  const maxPokemon = 150;
  const randomPokemon = Math.floor(Math.random() * maxPokemon);
  const otherPoke = Math.floor(Math.random() * maxPokemon);
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
    .then((res) => res.json())
    .then((pokemon) => {
      rivalArray.push(pokemon);
      startingRivalHP = pokemon.stats[0].base_stat + 60;

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
      startingPartnerHP = pokemon.stats[0].base_stat + 60;

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
    const fightBattle = () => {
      console.log(`Rival Starting HP: ${startingRivalHP}`);
      let partnerAttack = partnerArray[0].stats[1].base_stat;
      currentRivalHP = startingRivalHP - partnerAttack;

      startingRivalHP = currentRivalHP;

      console.log(`Partner Attack: ${partnerAttack}`);
      console.log(`Current Rival HP: ${currentRivalHP}`);
      console.log(`Current Starting HP: ${startingRivalHP}`);

      console.log(`Partner Starting HP: ${startingPartnerHP}`);
      let rivalAttack = rivalArray[0].stats[1].base_stat;
      currentPartnerHP = startingPartnerHP - rivalAttack;

      startingPartnerHP = currentPartnerHP;

      console.log(`Rival Attack: ${rivalAttack}`);
      console.log(`Current Partner HP: ${currentPartnerHP}`);
      console.log(`Current Starting HP: ${startingPartnerHP}`);
    };
    fightBattle();
    checkForWin();

    const fightDisplay = document.createElement("p");
    const fightText = document.createTextNode(`
    ${partnerArray[0].name.toUpperCase()} fought ${rivalArray[0].name.toUpperCase()}! 
    ${partnerArray[0].name.toUpperCase()} did
    ${
      partnerArray[0].stats[1].base_stat
    } damage to ${rivalArray[0].name.toUpperCase()}. It currently has ${startingRivalHP} HP! ${rivalArray[0].name.toUpperCase()} fought back & did
    ${
      rivalArray[0].stats[1].base_stat
    } damage to ${partnerArray[0].name.toUpperCase()}. It currently has ${startingPartnerHP} HP!
    `);

    fightDisplay.appendChild(fightText);

    divDisplay.appendChild(fightDisplay);
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
  pokemonButton.addEventListener("click", () => {
    const statsDisplay = document.createElement("div");
    statsDisplay.classList.add("statsDisplay");

    const partnerImg = document.createElement("img");
    partnerImg.src = partnerArray[0].sprites.front_default;
    statsDisplay.appendChild(partnerImg);

    const partnerStatsContainer = document.createElement("p");
    partnerStatsContainer.classList.add("statsContainer");
    document.querySelector("statsContainer");
    const statsText = document.createTextNode(`
    ID: ${partnerArray[0].id}
    NAME: ${partnerArray[0].name.toUpperCase()}
    LVL: 50
    HP: ${partnerArray[0].stats[0].base_stat}
    ATTACK: ${partnerArray[0].stats[1].base_stat}
    DEFENSE: ${partnerArray[0].stats[2].base_stat}
    SP.ATTACK: ${partnerArray[0].stats[3].base_stat}
    SP.DEFENSE: ${partnerArray[0].stats[4].base_stat}
    SPEED: ${partnerArray[0].stats[5].base_stat}
    `);

    partnerStatsContainer.appendChild(statsText);

    statsDisplay.appendChild(partnerStatsContainer);

    divDisplay.appendChild(statsDisplay);
  });
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
  if (currentRivalHP <= 0) {
    console.log("You Win!");
    alert("You Win!");
    setTimeout(() => location.reload(), 6000);
  } else if (currentPartnerHP <= 0) {
    console.log("You Lose!");
    alert("You Lose! Try Again");
    location.reload();
  }
};

window.onload = function () {
  getPokemon();
};
