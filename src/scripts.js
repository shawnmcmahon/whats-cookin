import './styles.css';
import apiCalls from './apiCalls';
import domUpdates from './domUpdates'
import RecipeRepository from './classes/RecipeRepository'
import Users from './classes/User'

let recipeRepository;
let globalIngredientsData = {}

//Query Selectors


//Event Listeners
window.onload = onStartUp();

//Methods

function onStartUp() {
  apiCalls.getData()
    // research this more...do we need .then?
    .then(([userData, ingredientsData, recipeData]) => {
      user = new User(userData[(Math.floor(Math.random() * userData.length))]);
      globalIngredientsData = ingredientsData;
      recipeRepository = new RecipeRepository(recipeData)
      //domUpdates function that populates all recipe cards to the home page

      //domUpdates function that will greet the user by updating the headline
    })
}


//Function that handles the what happens when a button is clicked
//(Consider having one big if, else conditional rather than multiple functions
//for each button's event listener)



//A function that adds a recipe to the cookbook when the cook button is pressed
function addRecipeToCookBook(event) {
  let clickedRecipe = recipeRepository.recipeData.find(recipe => {
    if(recipe.id === Number(event.target.dataset.id)) {
      return recipe
    }
  });
  return clickedRecipe
}


//A function that adds a recipe to favorites when the favorite button is pressed


//A function that adds the ingredient name to the ingredient so it can be displayed
//on the details page
