// steps:
// create search
// create result
// create fav

// const entryPoint = document.getElementById('entryPoint');
const searchContainer = document.getElementById('searchContainer');
const resultContainer = document.getElementById('resultContainer');
const favContainer = document.getElementById('favContainer');


function loadContainer() {
    // debugger;
    const searchArea = loadAndCreateSearch();

    // const resultArea = createResultArea(cat);

    // const favouriteArea = createFavouriteArea();

    
    // debugger;
    
    // // Creating Container to wrap search & Fav
    // const containerMain = document.createElement('div');
    // containerMain.classList.add('container');
    // containerMain.classList.add('double');
    
    
    // // Creating Wrapping search engine with the result
    // const searchWrapper = document.createElement('div');
    // searchWrapper.classList.add('search-wrapper');
    
    // searchWrapper.appendChild(searchArea);
    // // searchWrapper.appendChild(resultArea);

    // containerMain.appendChild(searchWrapper);
    // // containerMain.appendChild(favouriteArea);
    // entryPoint.appendChild(containerMain);
}


function loadAndCreateSearch() {

    // Creating search DIV

    const searchTitle = document.createElement('h1');
    searchTitle.classList.add('search__title');
    searchTitle.innerText = 'Search for a cat';

    const searchEngine = document.createElement('div');
    searchEngine.classList.add('search__action');

    const searchInput = document.createElement('input');
    searchInput.classList.add('search__input');
    searchInput.setAttribute("placeholder", "Enter keyword ....");

    const searchButton = document.createElement('button');
    searchButton.classList.add('search__btn');
    searchButton.setAttribute("type", "button");
    searchButton.innerText = 'SEARCH';
    searchButton.addEventListener('click', function() {
        startSearch(searchInput.value);
    })

    searchEngine.appendChild(searchInput);
    searchEngine.appendChild(searchButton);

    searchContainer.appendChild(searchTitle);
    searchContainer.appendChild(searchEngine);


}


function createResultArea(singleCatSetInfo) { // single record from catBreeds

    // Creating result DIV

    const resultTitle = document.createElement('h2');
    resultTitle.classList.add('result__title');
    resultTitle.innerText = `${singleCatSetInfo.name}`;


    const resultDescription = document.createElement('p');
    resultDescription.classList.add('result__desc'); 
    resultDescription.innerText = `Introduction ${singleCatSetInfo.description}`;

    const resultContry = document.createElement('p');
    resultContry.classList.add('result__desc'); 
    resultContry.innerText = `Country: ${singleCatSetInfo.origin}`;

    const resultAffectionlevel = document.createElement('p');
    resultAffectionlevel.classList.add('result__desc'); 
    resultAffectionlevel.innerText = `Affection Level: ${singleCatSetInfo.affection_level}`;

    const resultTemperament = document.createElement('p');
    resultTemperament.classList.add('result__desc'); 
    resultTemperament.innerText = `Temperament: ${singleCatSetInfo.temperament}`;

    const resultLink = document.createElement('a');
    resultLink.classList.add('result__more'); 
    resultLink.href = `${singleCatSetInfo.vcahospitals_url}`;
    resultLink.textContent = 'More information';

    const addToFavouriteButton = document.createElement('button');
    addToFavouriteButton.classList.add('result__fav-btn');
    addToFavouriteButton.setAttribute("type", "button");
    addToFavouriteButton.innerText = '❤️';

    
    resultTitle.appendChild(addToFavouriteButton);
    
    resultContainer.appendChild(resultTitle);
    resultContainer.appendChild(resultDescription);
    resultContainer.appendChild(resultContry);
    resultContainer.appendChild(resultAffectionlevel);
    resultContainer.appendChild(resultTemperament);
    resultContainer.appendChild(resultLink);
    
    addToFavouriteButton.addEventListener('click', function() {
        addFavouriteToStorage(singleCatSetInfo.name); // passing the name to be stored in the local storage
    });

}

function addFavouriteToStorage(catNameToFavourite) { // passing the variable singleCatSetInfo.name to this function and it becaome catNameToFavourite
    let favourites = [];
    if (localStorage.getItem('favouriteBreed') != null) {             // if no items in local storage, don't get inside the condition
        const previousSaved = JSON.parse(localStorage.favouriteBreed);  // retriving the stored arrays in the local storge to the front with the help of JSON
        previousSaved.forEach((item) => {                               // remove elements from array and push into new array
        favourites.push(item)                                           // pushing again the info to array (old & new)
     });
    }
    const newFavourite = favourites.push(catNameToFavourite) // pushing the name to the fav arr
    localStorage.setItem('favouriteBreed', JSON.stringify(favourites)); // favouriteBreed is a name for the array when it is stored in the local storage where the data coming from favourite
    
    createFavouriteArea();
}

function createFavouriteArea() {

    if (favContainer.firstChild) {
        favContainer.innerHTML = '';
    }
    // Creating favourite DIV


    const favTitle = document.createElement('h2');
    favTitle.classList.add('favourite__title'); 
    favTitle.innerText = 'FAVOURITES';

    const favList = document.createElement('ul');
    favList.classList.add('favourite__list'); 

    const favouriteSaved = JSON.parse(localStorage.favouriteBreed);  // favouriteSaved is array of saved array in the local storage which it was favouriteBreed

    for (let i = 0; i < favouriteSaved.length; i++) {
        const deleteFavouriteButton = document.createElement('button');
        deleteFavouriteButton.classList.add('favourite__delete');
        deleteFavouriteButton.innerText = 'X';
        const favItem = document.createElement('li');
        favItem.classList.add('favourite__item'); 
        favItem.innerText = favouriteSaved[i];

        deleteFavouriteButton.addEventListener('click', function() {
            removeFavourite(favouriteSaved[i]);
        })
        favItem.appendChild(deleteFavouriteButton);
        favList.appendChild(favItem);
    }
    favContainer.appendChild(favTitle);
    favContainer.appendChild(favList);
}

function removeFavourite(removingFavouriteItem) {
    const savedBreeds = JSON.parse(localStorage.favouriteBreed); 

    for (let i =0; i < savedBreeds.length; i++) {
        if (savedBreeds[i] === removingFavouriteItem) {
        savedBreeds.splice([i], 1);
        localStorage.setItem('favouriteBreed', JSON.stringify(savedBreeds));  
        }
    }
    createFavouriteArea();
}

function startSearch(searchBreed) {
    if (resultContainer.firstChild) {
        resultContainer.innerHTML = '';
    }
    const searchURL = `https://api.thecatapi.com/v1/breeds/search?q=${searchBreed}`
    fetchCb(searchURL, createBreed); // passing create and named load next
} 

function fetchCb(url, loadBreeds) { // passing to fetch callback function (URL or API) & loadbreed which is create breed
    // fetching data from the given URL (API)
    fetch(url,  { 
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '06c19bd0-c9a6-410b-a3be-5d0a1450e1d9'
      },
    })
      .then((response) => response.json()) // Convert the data to JSON or computer language
      .then((data) => {  // the result of the converting will get in data variable
        loadBreeds(data);    // return data to loadbreed function
    });
  }

  function createBreed(catBreeds) { // passing data variable and will be named catBreed
      
    catBreeds.forEach(createResultArea);
  }

window.addEventListener('DOMContentLoaded', loadContainer);







