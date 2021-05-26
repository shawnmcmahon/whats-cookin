import './styles.css';
import apiCalls from './apiCalls';
import domUpdates from './domUpdates'
import RecipeRepository from './classes/RecipeRepository'
import User from './classes/User'

let recipeRepository, user;
let globalIngredientsData = {}


const allRecipeCards = document.querySelector('#allRecipeCards');
const viewFavoriteRecipesBtn = document.querySelector('#viewFavoriteRecipesBtn');
const viewHomeBtn = document.querySelector('#homeBtn');
const viewCookbookRecipesBtn = document.querySelector('#cookbookBtn');
const searchField = document.querySelector('#searchField');

window.onload = onStartUp();

allRecipeCards.addEventListener('click', function() {
  retrieveButtonInstructions(event, recipeRepository, user)

})

viewFavoriteRecipesBtn.addEventListener('click', function() {
  retrieveButtonInstructions(event, recipeRepository, user)

})

viewCookbookRecipesBtn.addEventListener('click', function() {
  retrieveButtonInstructions(event, recipeRepository, user)

})

viewHomeBtn.addEventListener('click', function() {
  retrieveButtonInstructions(event, recipeRepository, user)

})

searchField.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    domUpdates.searchRecipes(recipeRepository, globalIngredientsData, user);
  }

})

function onStartUp() {
  apiCalls.getData()
    .then((promise) => {
      console.log(promise);
      user = new User(promise[0]['usersData'][0]);
      globalIngredientsData = promise[1]['ingredientsData'];
      recipeRepository = new RecipeRepository(promise[2]['recipeData']);
      domUpdates.greetUser(user);
      domUpdates.displayRecipeCards(recipeRepository, user, globalIngredientsData);
    })
}

function retrieveButtonInstructions(event, recipeRepository, user) {
  if (event.target.closest('button').id === 'addToFavoritesBtn') {
    domUpdates.addToFavoriteRecipes(event, recipeRepository, user)
  } else if (event.target.closest('button').id === 'addToCookbookBtn') {
    domUpdates.addToCookbook(event, recipeRepository, user)
  } else if (event.target.closest('button').id === 'detailsBtn') {
    domUpdates.displayInstructions(event, recipeRepository);
  } else if (event.target.closest('button').id === 'viewFavoriteRecipesBtn') {
    user.viewFavorites()
    domUpdates.displayFavoriteRecipeCards(recipeRepository, user, globalIngredientsData)
  } else if (event.target.closest('button').id === 'cookbookBtn') {
    user.viewHome();
    domUpdates.displayCookbookRecipeCards(recipeRepository, user, globalIngredientsData)
  } else if (event.target.closest('button').id === 'homeBtn') {
    user.viewHome();
    domUpdates.displayRecipeCards(recipeRepository, user, globalIngredientsData)
  }


}


export const addNameProperty = recipe => {
  let ingredientInfo = recipe.ingredients.map(ingredient => {
    const index = globalIngredientsData.findIndex(specificIngredient => specificIngredient.id === ingredient.id)
    return {
      name: globalIngredientsData[index].name,
      id: ingredient.id,
      quantity: {
        amount: ingredient.quantity.amount,
        unit: ingredient.quantity.unit
      }
    }
  })
  return ingredientInfo;
}
