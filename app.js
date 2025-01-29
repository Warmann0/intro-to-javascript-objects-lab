/// Exercise 1  

/* const game = {
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
  console.dir(pokemon, { maxArrayLength: null })
*/ //  Exercise 1 completed

/// Exercise 2  
/*
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
console.log(pokemon[58])

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:

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
game.difficulty = "Easy",


console.log(game)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
/*
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
game.difficulty = "Easy",

pokemon[53].starter = true /// I had to choose my fav pokemon :D


game.party = []

game.party.push(pokemon[53])


console.log(game.party)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:




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
game.difficulty = "Easy";

game.party.push(pokemon[53], pokemon[0], pokemon[142]) 


pokemon[53].starter = true // making sure the "starter always set true"
pokemon[0].starter = true // making sure the "starter always set true"
pokemon[142].starter = true // making sure the "starter always set true"


console.log(game.party)

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:


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
game.difficulty = "Easy";

game.party.push(pokemon[53], pokemon[0], pokemon[142]) 

game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});



pokemon[53].starter = true // making sure the "starter always set true"
pokemon[0].starter = true // making sure the "starter always set true"
pokemon[142].starter = true // making sure the "starter always set true"


console.log(game.gyms)



/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. 
When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:



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
game.difficulty = "Easy";

game.party.push(pokemon[53], pokemon[0], pokemon[142])




/////////////////////////////////////////////

game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true; ///////////////////// this code markes completed as true
  }
});
////////////////////////////

game.party.splice(0, 1, pokemon[game.party[0].number])
game.party.splice(1, 1, pokemon[game.party[1].number])
game.party.splice(2, 1, pokemon[game.party[2].number])



pokemon[53].starter = true // making sure the "starter always set true"
pokemon[0].starter = true // making sure the "starter always set true"
pokemon[142].starter = true // making sure the "starter always set true"


console.log(game.party)



/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:


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
game.difficulty = "Easy";

game.party.push(pokemon[53], pokemon[0], pokemon[142])




/////////////////////////////////////////////

game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true; ///////////////////// this code markes completed as true
  }
});

////////////////////////////

game.party.splice(0, 1, pokemon[game.party[0].number]) ////////////// this makes it evolve
game.party.splice(1, 1, pokemon[game.party[1].number]) ////////////// this makes it evolve
game.party.splice(2, 1, pokemon[game.party[2].number]) ////////////// this makes it evolve



pokemon[53].starter = true // making sure the "starter always set true"
pokemon[0].starter = true // making sure the "starter always set true"
pokemon[142].starter = true // making sure the "starter always set true"


console.log(game.pokemon)
game.party.forEach(pokemon => console.log(pokemon.name)); /// prints the pokemon's in the party starter game



/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:


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
game.difficulty = "Easy";

game.party.push(pokemon[53], pokemon[0], pokemon[142])




/////////////////////////////////////////////

game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true; ///////////////////// this code markes completed as true
  }
});

////////////////////////////

game.party.splice(0, 1, pokemon[game.party[0].number]) ////////////// this makes it evolve
game.party.splice(1, 1, pokemon[game.party[1].number]) ////////////// this makes it evolve
game.party.splice(2, 1, pokemon[game.party[2].number]) ////////////// this makes it evolve



pokemon[53].starter = true // making sure the "starter always set true"
pokemon[0].starter = true // making sure the "starter always set true"
pokemon[142].starter = true // making sure the "starter always set true"

game.party.forEach(pokemon => {
   (pokemon.starter) 
    console.log(pokemon.name);
  }
);

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

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
game.difficulty = "Easy";

game.party.push(pokemon[53], pokemon[0], pokemon[142])




/////////////////////////////////////////////

game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true; ///////////////////// this code markes completed as true
  }
});

////////////////////////////

game.party.splice(0, 1, pokemon[game.party[0].number]) ////////////// this makes it evolve
game.party.splice(1, 1, pokemon[game.party[1].number]) ////////////// this makes it evolve
game.party.splice(2, 1, pokemon[game.party[2].number]) ////////////// this makes it evolve



pokemon[53].starter = true // making sure the "starter always set true"
pokemon[0].starter = true // making sure the "starter always set true"
pokemon[142].starter = true // making sure the "starter always set true"


/* game.party.forEach(pokemon => {
    (pokemon.starter) 
   console.log(pokemon.name);
 }
);
*/

let cry = pokemon[50] 

game.catchPokemon = function(pokemonObj) {
  game.party.push(pokemonObj);
}


game.catchPokemon(cry);
console.log(game.party);


