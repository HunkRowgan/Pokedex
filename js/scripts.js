//this is a single line comment
/*this comment
spans multiple 
lines
*/


let pokemonList = [];

pokemonList = [

    {
        name: 'Bulbasaur',
        type: ['Grass', 'Poison'],
        height: 0.7,
    },
   
    {
        name: 'Ivysaur',
        type: ['Grass', 'Poison'],
        height: 1.0,
    },

    {
        name: 'Venusaur',
        type: ['Grass', 'Poison'],
        height: 0.7,
    }

];

// Iterate through the pokemonList and display each Pokemon's name and height
pokemonList.forEach(function (pokemon) {
    document.write(`Name: ${pokemon.name}, Type: ${pokemon.type.join(', ')}, Height: ${pokemon.height} meters<br>`);
  });