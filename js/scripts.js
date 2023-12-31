//this is a single line comment
/*this comment
spans multiple 
lines
*/

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; // variable to include pokemon api ?limit=150 sets number of pokemon to retain from api
  let modalContainer = document.querySelector('#modal-container');
  let dialogPromiseReject;


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
    button.classList.add('button', 'btn-block', 'btn-lg');
    listItem.classList.add('list-group-item', 'col-sm-6', 'col-md-4', 'col-lg-2');
    button.setAttribute('data-target', '#modal-container'); // review
    button.setAttribute('data-toggle', "modal"); // review
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    button.addEventListener('click', function(event){
        showDetails(pokemon);
    })
    button.addEventListener('keypress', function(event){
        if (event.key === 'Enter') {
            event.preventDefault(); //prevent default of keydown
            showDetails(pokemon);
        }
    });
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
      // add details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
      showModal(item);
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
    });
  }

// showModal
function showModal(pokemon) {
  //create variables to call modal elements
  let modalBody = $(".modal-body");
  //let modalTitle = $(".modal-title");
  let modalHeader = $(".modal-header");

  // empty any existing content from modal elements
  modalHeader.empty();
  modalBody.empty();

  //creating element for pokemon name
  let headerElement = $("<h1>" + pokemon.name + "</h1>");
  //create img element
  let imageElement = $('<img class = "modal-img" style = "width:50%">');
  imageElement.attr("src", pokemon.imageUrl);
  //create pokemon content element
  let contentElement = $("<p>Height: " + pokemon.height + "m" + "<br>Weight: " + pokemon.weight + "kg" /*+ "<br>Type: " + pokemon.types*/ + "</p>"); // will add types in later

  modalHeader.append(headerElement);
  modalBody.append(imageElement);
  modalBody.append(contentElement);
}

 /* // add new function for showModal
  function showModal(pokemon) {
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('p');
    contentElement.innerText = 'Height: ' + pokemon.height;

    let imageElement = document.createElement('img');
    imageElement.src = pokemon.imageUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);


   modalContainer.classList.add('is-visible');

  }*/

// add new function hideModal
  function hideModal() {
    modalContainer.classList.remove('is-visible');
      if (dialogPromiseReject) {
      dialogPromiseReject();
      dialogPromiseReject = null;
    }
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  })
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

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
  