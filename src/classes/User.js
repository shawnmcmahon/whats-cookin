import RecipeRepository from "./RecipeRepository";

class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.viewingFavorites = false;
  }

  viewFavorites() {
    this.viewingFavorites = true;
  }

  viewHome() {
    this.viewingFavorites = false;
  }

  addToFavorites(recipe) {
    if(!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    }
  }

  removeFromFavorites(recipe) {
    const index = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(index, 1);
  }

  addToRecipesToCook(recipe) {
    if(!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe);
    }
  }

  removeFromRecipesToCook(recipe) {
    const index = this.recipesToCook.indexOf(recipe);
    this.recipesToCook.splice(index, 1);
  }

  filterFavoriteRecipesByTags(...tags) {
    let favoriteRecipes = new RecipeRepository(this.favoriteRecipes);
    return favoriteRecipes.retrieveRecipesByTag(...tags);
  }

  retrieveFavoritesByNameOrIngredient(ingredientsData, ...keywords) {
    let favoriteRecipes = new RecipeRepository(this.favoriteRecipes);
    return favoriteRecipes.retrieveRecipesByNameOrIngredient(ingredientsData, ...keywords);
  }

}


export default User;
