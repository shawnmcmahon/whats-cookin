import Recipe from './classes/Recipe'
import User from './classes/User'
import { addNameProperty } from './scripts'
const greeting = document.querySelector('#greeting');
const allRecipeCards = document.querySelector('#allRecipeCards');
const ingredientsTag = document.querySelector('#ingredients');
const instructionsTag = document.querySelector('#instructions');
const recipeCard = document.querySelector('#recipeCard');
const searchField = document.querySelector('#searchField');
const searchSection = document.querySelector('#searchSection')


let domUpdates = {
  greetUser(user) {
    greeting.innerHTML =
      'What\'s Cooking, ' + user.name + '?';
  },

  displayRecipeCards(recipes, user, ingredientsData) {
    recipes.recipesData.forEach(recipe => {
      allRecipeCards.insertAdjacentHTML('afterbegin', `
        <article id="recipeCard" class="recipe-card">
          <img id="recipeImage" class="recipe-image" src="${recipe.image}" alt="Recipe Image">
          <div class="recipe-card-btn-section">
            <button data-id=${recipe.id} id="detailsBtn" type="button" name="button">Details</button>
            <button data-id=${recipe.id} id="addToCookbookBtn" type="button" name="button">Cook</button>
            <button data-id=${recipe.id} id="addToFavoritesBtn" type="button" name="button">Favorites</button>
          </div>
          <div class="recipe-name-container">
            <p id="recipeName" class="recipe-name">${recipe.name}</p>
          </div>
          <section id="${recipe.id}" class="details-background hidden">
            <p data-id=${recipe.id} id="ingredientsLabel" class="label">Ingredients</p>
            <ul>
            ${this.returnIngredientsDetails(recipe)}
            </ul>
            <p data-id=${recipe.id} id="instructionsLabel" class="label">Instructions</p>
            <ol>
            ${this.returnInstructionDetails(recipe)}
            </ol>
            <p data-id=${recipe.id} id="instructionsLabel" class="label">Cost</p>
            <ol>
            $${this.returnRecipeCost(recipe, ingredientsData)}
            </ol>
          </section>
        </article>
      `)
    })
  },

  returnRecipeCost(recipe, ingredientsData) {
    const currentRecipe = new Recipe(recipe, ingredientsData);
    return currentRecipe.calculateRecipeCost();
  },

  returnIngredientsDetails(recipe) {
    return addNameProperty(recipe).map(ingredient => {
      return `<li>${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit} ${ingredient.name}</li>`
    }).join('');
  },

  returnInstructionDetails(recipe) {
    return recipe.instructions.map(instruction => {
      return `<li>${instruction.instruction}</li>`
    }).join('');
  },

  addToFavoriteRecipes(event, recipes, user) {
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

  },

  displayFavoriteRecipeCards(recipes, user, ingredientsData) {
    allRecipeCards.innerHTML = ' ';
    user.favoriteRecipes.forEach(recipe => {
        allRecipeCards.insertAdjacentHTML('afterbegin', `
        <article id="recipeCard" class="recipe-card">
        <img id="recipeImage" class="recipe-image" src="${recipe.image}" alt="Recipe Image">
        <div class="recipe-card-btn-section">
        <button data-id=${recipe.id} id="detailsBtn" type="button" name="button">Details</button>
        <button data-id=${recipe.id} id="addToCookbookBtn" type="button" name="button">Cook</button>
        <button data-id=${recipe.id} id="addToFavoritesBtn" class="favorite-recipe" type="button" name="button">Favorites</button>
        </div>
        <p id="recipeName" class="recipe-name">${recipe.name}</p>
        <section id="${recipe.id}" class="details-background hidden">
        <p data-id=${recipe.id} id="ingredientsLabel" class="label">Ingredients</p>
        <ul>
        ${this.returnIngredientsDetails(recipe)}
        </ul>
        <p data-id=${recipe.id} id="instructionsLabel" class="label">instructions</p>
        <ol>
        ${this.returnInstructionDetails(recipe)}
        </ol>
        <p data-id=${recipe.id} id="instructionsLabel" class="label">Cost</p>
        <ol>
        $${this.returnRecipeCost(recipe, ingredientsData)}
        </ol>
        </section>
        </article>
        `)
    })
  },

  addToCookbook(event, recipes, user) {
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

  },

  displayCookbookRecipeCards(recipes, user, ingredientsData) {
    allRecipeCards.innerHTML = ' ';
    user.recipesToCook.forEach(recipe => {
      allRecipeCards.insertAdjacentHTML('afterbegin', `
        <article id="recipeCard" class="recipe-card">
          <img id="recipeImage" class="recipe-image" src="${recipe.image}" alt="Recipe Image">
          <div class="recipe-card-btn-section">
            <button data-id=${recipe.id} id="detailsBtn" type="button" name="button">Details</button>
            <button data-id=${recipe.id} id="addToCookbookBtn" class="cookbook-recipe" type="button" name="button">Cook</button>
            <button data-id=${recipe.id} id="addToFavoritesBtn" type="button" name="button">Favorites</button>
          </div>
          <p id="recipeName" class="recipe-name">${recipe.name}</p>
          <section id="${recipe.id}" class="details-background hidden">
            <p data-id=${recipe.id} id="ingredientsLabel" class="label">Ingredients</p>
            <ul>
            ${this.returnIngredientsDetails(recipe)}
            </ul>
            <p data-id=${recipe.id} id="instructionsLabel" class="label">instructions</p>
            <ol>
            ${this.returnInstructionDetails(recipe)}
            </ol>
            <p data-id=${recipe.id} id="instructionsLabel" class="label">Cost</p>
            <ol>
            $${this.returnRecipeCost(recipe, ingredientsData)}
            </ol>
          </section>
        </article>
      `)
    })
  },

  displayInstructions(event, recipes) {
    const clickedRecipe = recipes.recipesData.find(recipe => {
      if (recipe.id === Number(event.target.dataset.id)) {
        return recipe;
      }
    });
    const detailsBackground = document.getElementById(`${clickedRecipe.id}`);
    const detailsBtn = document.getElementById('detailsBtn');
      if (!detailsBackground.classList.contains('hidden')) {
        detailsBtn.classList.remove('display-instructions');
        detailsBackground.classList.add('hidden');
      } else if (detailsBackground.classList.contains('hidden')) {
        detailsBtn.classList.add('display-instructions');
        detailsBackground.classList.remove('hidden');
      }

    this.selectedRecipeView();
    },

    selectedRecipeView() {
      if (!allRecipeCards.classList.contains('selected-view')) {
        allRecipeCards.classList.add('selected-view');
      } else {
        allRecipeCards.classList.remove('selected-view');
      }
    },

    displaySearchResults(recipes, ingredientsData, user) {
      recipes.forEach(specificRecipe => {
        specificRecipe.forEach(recipe => {
          allRecipeCards.insertAdjacentHTML('afterbegin', `
            <article id="recipeCard" class="recipe-card">
              <img id="recipeImage" class="recipe-image" src="${recipe.image}" alt="Recipe Image">
              <div class="recipe-card-btn-section">
                <button data-id=${recipe.id} id="detailsBtn" type="button" name="button">Details</button>
                <button data-id=${recipe.id} id="addToCookbookBtn" type="button" name="button">Cook</button>
                <button data-id=${recipe.id} id="addToFavoritesBtn" type="button" name="button">Favorites</button>
              </div>
              <p id="recipeName" class="recipe-name">${recipe.name}</p>
              <section id="${recipe.id}" class="details-background hidden">
                <p data-id=${recipe.id} id="ingredientsLabel" class="label">Ingredients</p>
                <ul>
                ${this.returnIngredientsDetails(recipe)}
                </ul>
                <p data-id=${recipe.id} id="instructionsLabel" class="label">instructions</p>
                <ol>
                ${this.returnInstructionDetails(recipe)}
                </ol>
                <p data-id=${recipe.id} id="instructionsLabel" class="label">Cost</p>
                <ol>
                $${this.returnRecipeCost(recipe, ingredientsData)}
                </ol>
              </section>
            </article>
          `)
        })
      })
    },

  searchRecipes(recipes, ingredientsData, user) {
    allRecipeCards.innerHTML = ' ';
    let searchQuery =  searchField.value;
    let results = [];
    if(!user.viewingFavorites) {
      const tagResults = recipes.retrieveRecipesByTag(searchQuery);
      const nameOrIngredientResults = recipes.retrieveRecipesByNameOrIngredient(ingredientsData, searchQuery);
      if (tagResults.length > 0) {
        results.push(tagResults);
      }

      if (nameOrIngredientResults.length > 0) {
        results.push(nameOrIngredientResults);
      }
      this.displaySearchResults(results, ingredientsData, user);
    }

    if (user.viewingFavorites) {
      const favoriteTagResults = user.filterFavoriteRecipesByTags(searchQuery);
      const favoriteNameOrIngredientsResults = user.retrieveFavoritesByNameOrIngredient(ingredientsData, searchQuery);

      if (favoriteTagResults.length > 0) {
        results.push(favoriteTagResults);
      }

      if (favoriteNameOrIngredientsResults.length > 0) {
        results.push(favoriteNameOrIngredientsResults);
      }

      this.displaySearchResults(results, ingredientsData, user);
    }
  }


}
export default domUpdates;
