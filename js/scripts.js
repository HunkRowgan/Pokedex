//this is a single line comment
/*this comment
spans multiple 
lines
*/

let pokemonRepository = (function (){
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
    },
    {
        name: 'Butterfree',
        type: ['Bug', 'Flying'],
        height: 1.1,
    }

];

return {
    getAll: function(){
        return pokemonList;
    },
    add: function(item){
        return pokemonList.push(item);
     }
    };
})();

pokemonRepository.add({ name: 'Pikachu', type: ['the best one'], height: 1.4, })

// Iterate through the pokemonList and display each Pokemon's name and height
pokemonRepository.getAll().forEach(function (pokemon) {
    document.write(`Name: ${pokemon.name}, Type: ${pokemon.type.join(', ')}, Height: ${pokemon.height} meters<br>`);
  })



/*for (let i = 0; i < pokemonList.length; i++) {
    

    if (pokemonList[i].height > 1) {
        document.write(`Name: ${pokemonList[i].name} Type: ${pokemonList[i].type} Height: ${pokemonList[i].height} metres - Wow, that’s big!`)
    } else {
        document.write(`Name: ${pokemonList[i].name} Type: ${pokemonList[i].type} Height: ${pokemonList[i].height} metres<br>`)
    }
}*/

;
  