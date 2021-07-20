const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
const rapidAPIKey = '4bce0706f4msh51511146eb63257p1a0856jsn460f4c2e91e5';
const rapidAPIHost = 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
const rapidAPIApp = 'default-application_5355362';
const dietType = document.getElementsByName('diet');
// const baseURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=pizza&number=20`;
let searchQuery = '';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery);
    const diet = selectDiet();
    fetchAPI(searchQuery, diet);
});

async function fetchAPI(search,diet){
    const baseURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${search}${diet}&number=20`;
    await fetch(baseURL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": rapidAPIKey,
            "x-rapidapi-host": rapidAPIHost
        }
    })
        .then(response => {
            if(!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.results);
            generateHTML(data.results);
        })
        .catch(error => {
            console.error(error);
        });
}

function selectDiet() {
    let value = 0;
    for (let i = 0, len = dietType.length;i < len; i++) {
        if(dietType[i].checked) {
            value = dietType[i].value;
            break;
        }
    }
    switch (parseInt(value)) {
        case 0:
            return '';
        case 1:
            return '&diet=low-carb';
        case 2:
            return '&intolerances=gluten';
    }
}

function generateHTML(results) {
    container.classList.remove('initial');
    let generatedHTML = '';
    results.map(result => {
        generatedHTML +=
            `
            <div class="item">
              <img src="https://spoonacular.com/recipeImages/${result.image}" alt="${result.title}">
              <div class="flex-container">
                 <h1 class="title">${result.title}</h1>
                 <a class="view-button" href="${result.sourceUrl}" target="_blank">View Recipe</a>
              </div>
              <p class="item-data">Servings: ${result.servings}</p>
              <p class="item-data">Cook Time: ${result.readyInMinutes} minutes</p>
            </div>
            `
    })
    searchResultDiv.innerHTML = generatedHTML;
}