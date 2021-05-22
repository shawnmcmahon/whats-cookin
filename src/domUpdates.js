import Recipe from './classes/Recipe'


const detailsBtn = document.querySelector('.viewMoreViewLessBtn');
const addToCookbookBtn = document.querySelector('.addToCookbookBtn');
const addToFavoritesBtn = document.querySelector('.addToFavoritesBtn');
const greeting = document.querySelector('.greeting');
const allRecipeCards = document.querySelector('#allRecipeCards')


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
          <button id="viewMoreViewLessBtn" type="button" name="button">View More</button>
          <button id="addToCookbookBtn" type="button" name="button">Cook</button>
          <button id="addToFavoritesBtn" type="button" name="button">Favorites</button>
        </div>
        <p id="recipeName" class="recipe-name">${recipe.name}</p>
        <section id="detailsBackground" class="details-background">
          <p id="ingredientsLabel" class="label">Ingredients</p>
          <p id="ingredients" class="details-text"> ${recipe.ingredients}</p>
          <p id="instructionsLabel" class="label">Instructions</p>
          <p id="instructions" class="details-text">${recipe.instructions}</p>
        </section>
      </article>
      `)
    })
  }

  //3. A function that adds the recipe card to the favorite recipes array
  //when the favorite button is clicked.


  //4. A function that populates the favorites recipes cards to the screen and
  //removes all recipe cards.
  //If no favorites available, switch the text of the favorite button from
  // Fav -> No Favs


  //5. A function adds the recipe card to the cookbook array when the cook
  // button is clicked.

  //6. A function that populates the cookbook recipes cards to the screen and
  //removes all recipe cards.
  //If no recipes in the cookbook available, switch the text of the cookbook button from
  // Cookbook -> No Recipes


  //7. A function that inserts the recipe instructions and ingredients into the
  // recipe instructions background when you press the "details" button
  // Button label should toggle to View Less when ingredients are activated
  // (Should toggle back to normal view without extra information when button is clicked again)


  //8. A function that displays recipe on the screen when a user types in
  //keywords the search bar. Should search through recipe name, ingredient names, or tags




}


export default domUpdates;
