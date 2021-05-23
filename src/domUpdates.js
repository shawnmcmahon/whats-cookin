import Recipe from './classes/Recipe'
//import { addNameProperty } from './scripts'


const detailsBtn = document.querySelector('.viewMoreViewLessBtn');
const addToCookbookBtn = document.querySelector('.addToCookbookBtn');
const addToFavoritesBtn = document.querySelector('.addToFavoritesBtn');
const greeting = document.querySelector('.greeting');
const allRecipeCards = document.querySelector('#allRecipeCards');
const detailsBackground = document.querySelector('#detailsBackground')
const ingredientsTag = document.querySelector('#ingredients');
const instructionsTag = document.querySelector('#instructions');

const recipeCard = document.querySelector('#recipeCard');
const viewMoreViewLessBtn = document.querySelector('#viewMoreViewLessBtn');




// Event Listeners

let domUpdates = {
  //1. A function that greets a User that updates the headline with their username
  greetUser(user) {
    greeting.innerHTML =
      'What\'s Cooking, ' + user.name + '?';
  },

  //2. A function that populates all recipe cards to the home scren

  displayRecipeCards(recipes) {
    allRecipeCards.innerHTML = ' ';
    recipes.recipesData.forEach(recipe => {
      allRecipeCards.insertAdjacentHTML('afterbegin', `
      <article id="recipeCard" class="recipe-card">
        <img id="recipeImage" class="recipe-image" src="${recipe.image}" alt="Recipe Image">
        <div class="recipe-card-btn-section">
          <button data-id=${recipe.id} id="viewMoreViewLessBtn" type="button" name="button">View More</button>
          <button data-id=${recipe.id} id="addToCookbookBtn" type="button" name="button">Cook</button>
          <button data-id=${recipe.id} id="addToFavoritesBtn" type="button" name="button">Favorites</button>
        </div>
        <p id="recipeName" class="recipe-name">${recipe.name}</p>
        <section id="detailsBackground" class="details-background hidden">
          <p data-id=${recipe.id} id="ingredientsLabel" class="label">Ingredients</p>
          <p data-id=${recipe.id} id="ingredients" class="details-text">${recipe.ingredients}</p>
          <p data-id=${recipe.id} id="instructionsLabel" class="label">instructions</p>
          <p data-id=${recipe.id} id="instructions" class="details-text">${recipe.instructions}</p>
        </section>
      </article>
      `)
    })
  },

  //3. A function that adds the recipe card to the favorite recipes array
  //when the favorite button is clicked.
  // adding recipe to user.favoriteRecipes
  addToFavoriteRecipes(event, recipes, user) {
    // If recipe doesn't contain favorite class...add favorite class
    // If it does add it to favorites
    // Click button again and it removes from favorites
    const favoriteRecipe = recipes.recipesData.find(recipe => {
      if (recipe.id === Number(event.target.dataset.id)) {
        return recipe;
      }
    })
      if(!event.target.classList.contains('favorite-recipe')) {
        event.target.classList.add('favorite-recipe');
        user.addToFavorites(favoriteRecipe);
      } else if (event.target.classList.contains('favorite-recipe')) {
        event.target.classList.remove('favorite-recipe');
        user.removeFromFavorites(favoriteRecipe);
      }
      console.log('Favorite Clicked', user);

  },
  //4. A function that populates the favorites recipes cards to the screen and
  //removes all recipe cards.
  displayFavoriteRecipeCards(recipes, user) {
    allRecipeCards.innerHTML = ' ';
    user.favoriteRecipes.forEach(recipe => {
      allRecipeCards.insertAdjacentHTML('afterbegin', `
      <article id="recipeCard" class="recipe-card">
        <img id="recipeImage" class="recipe-image" src="${recipe.image}" alt="Recipe Image">
        <div class="recipe-card-btn-section">
          <button data-id=${recipe.id} id="viewMoreViewLessBtn" type="button" name="button">View More</button>
          <button data-id=${recipe.id} id="addToCookbookBtn" type="button" name="button">Cook</button>
          <button data-id=${recipe.id} id="addToFavoritesBtn" class="favorite-recipe" type="button" name="button">Favorites</button>
        </div>
        <p id="recipeName" class="recipe-name">${recipe.name}</p>
        <section id="detailsBackground" class="details-background hidden">
          <p data-id=${recipe.id} id="ingredientsLabel" class="label">Ingredients</p>
          <p data-id=${recipe.id} id="ingredients" class="details-text">${recipe.ingredients}</p>
          <p data-id=${recipe.id} id="instructionsLabel" class="label">instructions</p>
          <p data-id=${recipe.id} id="instructions" class="details-text">${recipe.instructions}</p>
        </section>
      </article>
      `)
    })
  },
  //If no favorites available, switch the text of the favorite button from
  // Fav -> No Favs

  addToCookbook(event, recipes, user) {

  //5. A function adds the recipe card to the cookbook array when the cook
  // button is clicked.
  const recipeToBeCooked = recipes.recipesData.find(recipe => {
    if (recipe.id === Number(event.target.dataset.id)) {
      return recipe;
    }
  })
    if(!event.target.classList.contains('cookbook-recipe')) {
      event.target.classList.add('cookbook-recipe');
      user.addToRecipesToCook(recipeToBeCooked);
    } else if (event.target.classList.contains('cookbook-recipe')) {
      event.target.classList.remove('cookbook-recipe');
      user.removeFromRecipesToCook(recipeToBeCooked);
    }

    console.log('COOKBOOK CLICKED', user);
  },
  //6. A function that populates the cookbook recipes cards to the screen and
  //removes all recipe cards.
  //If no recipes in the cookbook available, switch the text of the cookbook button from
  // Cookbook -> No Recipes
  displayCookbookRecipeCards(recipes, user) {
    allRecipeCards.innerHTML = ' ';
    user.recipesToCook.forEach(recipe => {
      allRecipeCards.insertAdjacentHTML('afterbegin', `
      <article id="recipeCard" class="recipe-card">
        <img id="recipeImage" class="recipe-image" src="${recipe.image}" alt="Recipe Image">
        <div class="recipe-card-btn-section">
          <button data-id=${recipe.id} id="viewMoreViewLessBtn" type="button" name="button">View More</button>
          <button data-id=${recipe.id} id="addToCookbookBtn" class="cookbook-recipe" type="button" name="button">Cook</button>
          <button data-id=${recipe.id} id="addToFavoritesBtn" type="button" name="button">Favorites</button>
        </div>
        <p id="recipeName" class="recipe-name">${recipe.name}</p>
        <section id="detailsBackground" class="details-background hidden">
          <p data-id=${recipe.id} id="ingredientsLabel" class="label">Ingredients</p>
          <p data-id=${recipe.id} id="ingredients" class="details-text">${recipe.ingredients}</p>
          <p data-id=${recipe.id} id="instructionsLabel" class="label">instructions</p>
          <p data-id=${recipe.id} id="instructions" class="details-text">${recipe.instructions}</p>
        </section>
      </article>
      `)
    })
  },

  //7. A function that inserts the recipe instructions and ingredients into the
  // recipe instructions background when you press the "details" button
  // Button label should toggle to View Less when ingredients are activated
  // (Should toggle back to normal view without extra information when button is clicked again)
  displayInstructions(event, recipes) {
    const clickedRecipe = recipes.recipesData.find(recipe => {
      if (recipe.id === Number(event.target.dataset.id)) {
        return recipe;
      }
    })
    // const recipeWithIngredientNames = addNameProperty(clickedRecipe);

      if(!detailsBackground.classList.contains('hidden')) {
        viewMoreViewLessBtn.classList.remove('display-instructions');
        detailsBackground.classList.add('hidden');

        // clickedRecipe.ingredients.forEach(ingredient => {
        //   console.log(ingredient)
        //   ingredientsTag.insertAdjacentHTML('afterbegin', `${ingredient.id}, ${ingredient.quantity.amount}, ${ingredient.quantity.unit}`)
        // });

    } else if (detailsBackground.classList.contains('hidden')) {
        viewMoreViewLessBtn.classList.add('display-instructions');
        detailsBackground.classList.remove('hidden');


      }
    console.log('VIEWMORE CLICKED');
   }

  //8. A function that displays recipe on the screen when a user types in
  //keywords the search bar. Should search through recipe name, ingredient names, or tags




}


export default domUpdates;
