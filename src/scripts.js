import './styles.css';
import apiCalls from './apiCalls';
import domUpdates from './domUpdates'
import RecipeRepository from './classes/RecipeRepository'
import User from './classes/User'

let recipeRepository, user;
let globalIngredientsData = {}

//Query Selectors
const favoriteBtn = document.querySelector('.favoriteRecipesBtn');
const cookbookBtn = document.querySelector('.cookbookBtn');
const searchInput = document.querySelector('#searchField');
//const allRecipeCardsBackground = document.querySelector('.allRecipeCards');
//const detailsBackground = document.querySelector('.detailsBackground');


//Event Listeners
window.onload = onStartUp();

//Methods

function onStartUp() {
  apiCalls.getData()
    .then(([userData, ingredientsData, recipeData]) => {
      user = new User(userData[(Math.floor(Math.random() * userData.length))]);
      globalIngredientsData = ingredientsData;
      recipeRepository = new RecipeRepository(recipeData)
      //domUpdates function that populates all recipe cards to the home page

      //domUpdates function that will greet the user by updating the headline
      domUpdates.greetUser(user);
    })
}


//Function that handles the what happens when a button is clicked
//(Consider having one big if, else conditional rather than multiple functions
//for each button's event listener)



//A function that adds a recipe to the cookbook when the cook button is pressed
// function addRecipeToCookBook(event) {
//   let clickedRecipe = recipeRepository.recipeData.find(recipe => {
//     if (recipe.id === Number(event.target.dataset.id) {
//       return recipe
//     })
//   });
//   return clickedRecipe
// }


//A function that adds a recipe to favorites when the favorite button is pressed


//A function that adds the ingredient name to the ingredient so it can be displayed
//on the details page
