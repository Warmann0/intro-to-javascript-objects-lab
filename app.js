const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }


  // Solve Exercise 1 here:
  console.dir(pokemon, { maxArrayLength: null })
 

// Solve Exercise 2 here:
console.log(pokemon[58])


// Solve Exercise 3 here:
game.difficulty = "Easy",
console.log(game)


// Solve Exercise 4 here:
pokemon[53].starter = true /// I had to choose my fav pokemon :D
game.party = []
game.party.push(pokemon[53])
console.log(game.party)

// Solve Exercise 5 here:
game.party.push(pokemon[53], pokemon[0], pokemon[142]) 
pokemon[53].starter = true // making sure the "starter always set true"
pokemon[0].starter = true // making sure the "starter always set true"
pokemon[142].starter = true // making sure the "starter always set true"
console.log(game.party)

// Solve Exercise 6 here:
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});
console.log(game.gyms)

// Solve Exercise 7 here:
game.party.splice(0, 1, pokemon[game.party[0].number])
game.party.splice(1, 1, pokemon[game.party[1].number])
game.party.splice(2, 1, pokemon[game.party[2].number])
console.log(game.party)

// Solve Exercise 8 here:
game.party.forEach(pokemon => console.log(pokemon.name)); /// prints the pokemon's in the party starter game

// Solve Exercise 9 here:
game.party.forEach(pokemon => {
  (pokemon.starter) 
   console.log(pokemon.name);
 }
);

// Solve Exercise 10 here:
let cry = pokemon[50] 
game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemonObj);
}
game.catchPokemon(cry);
console.log(game.party);

// Solve Exercise 11 here:
game.catchPokemon = (pokemonObj) => {
  let cry = game.items.find(item => item.name === "cry");
  game.party.push(pokemonObj);
  cry.quantity--;
};
console.log(cry.item)

// Solve Exercise 12 here:
game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) {
    gym.completed = true;                     
  }
});

// Solve Exercise 13 here:
game.gymStatus = () => {
  const gymTally = { completed: 0, incomplete: 0 };
  game.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  });
};
game.gymStatus();

// Solve Exercise 13 here:
game.partyCount = () => {
  return game.party.length;
 };
 
// Solve Exercise 15 here:
game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true;                     
  }
});

// Solve Exercise 16 here:
console.log(game);

