//this is a single line comment
/*this comment
spans multiple 
lines
*/

let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; // variable to include pokemon api ?limit=150 sets number of pokemon to retain from api


function showDetails (pokemon){
    console.log(pokemon);
};


function add(pokemon) {
    if (
        typeof pokemon === "object" &&
        "name" in pokemon
    ) {
        pokemonList.push(pokemon);
    }
    else {
        console.log("pokemon is not correct");
    }
}
function getAll() {
    return pokemonList;
}


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
//loadList
function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
//loadDetails
function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails

};

})();

console.log(pokemonRepository.getAll());

  pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });

;
  