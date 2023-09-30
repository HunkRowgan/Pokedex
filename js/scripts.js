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

function showDetails (pokemon){
    console.log(pokemon);
};


function addListItem (pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    button.addEventListener('click', function(event){
        showDetails(pokemon);
    })

}



return {
    getAll: function(){
        return pokemonList;
    },
    add: function(item){
        return pokemonList.push(item);
     },
     addListItem: addListItem
    };
})();

console.log(pokemonRepository.getAll());

// Iterate through the pokemonList and display each Pokemon's name and height
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });



/*for (let i = 0; i < pokemonList.length; i++) {
    

    if (pokemonList[i].height > 1) {
        document.write(`Name: ${pokemonList[i].name} Type: ${pokemonList[i].type} Height: ${pokemonList[i].height} metres - Wow, that’s big!`)
    } else {
        document.write(`Name: ${pokemonList[i].name} Type: ${pokemonList[i].type} Height: ${pokemonList[i].height} metres<br>`)
    }
}*/

;
  