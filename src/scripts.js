import './styles.css';
import apiCalls from './apiCalls';
import domUpdates from './domUpdates'
import RecipeRepository from './classes/RecipeRepository'
import User from './classes/User'

let recipeRepository, user;
let globalIngredientsData = {}

const favoriteBtn = document.querySelector('.favoriteRecipesBtn');
const cookbookBtn = document.querySelector('.cookbookBtn');
const searchInput = document.querySelector('#searchField');
const allRecipeCards = document.querySelector('#allRecipeCards');
const recipeCard = document.querySelector('#recipeCard');
const detailsBackground = document.querySelector('#detailsBackground')
const viewFavoriteRecipesBtn = document.querySelector('#viewFavoriteRecipesBtn');
const viewHomeBtn = document.querySelector('#homeBtn');
const viewCookbookRecipesBtn = document.querySelector('#cookbookBtn');
const detailsBtn = document.querySelector('#detailsBtn');
const searchField = document.querySelector('#searchField');

window.onload = onStartUp();

allRecipeCards.addEventListener('click', function() {
  // displayInstructionsButton(event);
  // addToFavoritesButton(event);
  // addToCookbookButton(event);
  retrieveButtonInstructions(event, recipeRepository, user)

})

viewFavoriteRecipesBtn.addEventListener('click', function() {
  // viewFavoriteRecipes(event, recipeRepository, user);

  retrieveButtonInstructions(event, recipeRepository, user)

})

viewCookbookRecipesBtn.addEventListener('click', function() {
  // viewCookbookRecipes(event, recipeRepository, user);
  retrieveButtonInstructions(event, recipeRepository, user)

})

viewHomeBtn.addEventListener('click', function() {

   // viewHomePage(event, recipeRepository, user);
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
      user = new User(promise[0]['usersData'][0]);
      globalIngredientsData = promise[1]['ingredientsData'];
      recipeRepository = new RecipeRepository(promise[2]['recipeData']);
      domUpdates.greetUser(user);
      domUpdates.displayRecipeCards(recipeRepository, user, globalIngredientsData);
    })
}

function retrieveButtonInstructions(event, recipeRepository, user) {
  if (event.target.closest('button').id === 'addToFavoritesBtn') {
    // if (recipeCard.classList.contains('favorite-recipe')) {
    //   domUpdates.addToFavoriteRecipes(event, recipeRepository, user);
    // } else if(!recipeCard.classList.contains('favorite-recipe')) {
    //   domUpdates.addToFavoriteRecipes(event, recipeRepository, user)
    // }
    domUpdates.addToFavoriteRecipes(event, recipeRepository, user)

  } else if (event.target.closest('button').id === 'addToCookbookBtn') {
      // if (recipeCard.classList.contains('favorite-recipe')) {
      //   domUpdates.addToCookbook(event, recipeRepository, user);
      // } else if(!recipeCard.classList.contains('favorite-recipe')) {
      //   domUpdates.addToCookbook(event, recipeRepository, user)
      // }
      domUpdates.addToCookbook(event, recipeRepository, user)

  } else if (event.target.closest('button').id === 'detailsBtn') {
      // if (detailsBtn.classList.contains('display-instructions')) {
      //   domUpdates.displayInstructions(event, recipeRepository);
      // } else if(!detailsBtn.classList.contains('display-instructions')) {
      //   domUpdates.displayInstructions(event, recipeRepository);
      // }

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
//
// function addToFavoritesButton(event) {
//   if (event.target.closest('button').id === 'addToFavoritesBtn') {
//     if (recipeCard.classList.contains('favorite-recipe')) {
//       domUpdates.addToFavoriteRecipes(event, recipeRepository, user);
//     } else if(!recipeCard.classList.contains('favorite-recipe')) {
//       domUpdates.addToFavoriteRecipes(event, recipeRepository, user)
//     }
//   }
// }
//
// function addToCookbookButton(event) {
//   if (event.target.closest('button').id === 'addToCookbookBtn') {
//     if (recipeCard.classList.contains('favorite-recipe')) {
//       domUpdates.addToCookbook(event, recipeRepository, user);
//     } else if(!recipeCard.classList.contains('favorite-recipe')) {
//       domUpdates.addToCookbook(event, recipeRepository, user)
//     }
//   }
// }
//
// function displayInstructionsButton(event) {
//   if (event.target.closest('button').id === 'detailsBtn') {
//     if (detailsBtn.classList.contains('display-instructions')) {
//       domUpdates.displayInstructions(event, recipeRepository);
//     } else if(!detailsBtn.classList.contains('display-instructions')) {
//       domUpdates.displayInstructions(event, recipeRepository);
//     }
//   }
// }
//
// function viewFavoriteRecipes(event, recipeRepository, user) {
//   if (event.target.closest('button').id === 'viewFavoriteRecipesBtn') {
//     allRecipeCards.innerHTML = ' ';
//     domUpdates.displayFavoriteRecipeCards(recipeRepository, user, globalIngredientsData)
//     }
//
//   }
//
// function viewCookbookRecipes(event, recipeRepository, user) {
//   if (event.target.closest('button').id === 'cookbookBtn') {
//     allRecipeCards.innerHTML = ' ';
//     domUpdates.displayCookbookRecipeCards(recipeRepository, user, globalIngredientsData)
//     }
//
//   }
//
// function viewHomePage(event, recipeRepository) {
//   if (event.target.closest('button').id === 'homeBtn') {
//     allRecipeCards.innerHTML = ' ';
//     domUpdates.displayRecipeCards(recipeRepository, user, globalIngredientsData)
//     }
//
//   }

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
