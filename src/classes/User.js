class User {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addToFavorites(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeFromFavorites(recipe) {
    const index = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(index, 1);
  }

  // Decide to cook a recipe that week (add to my recipesToCook)

  addToRecipesToCook(recipe) {
    this.recipesToCook.push(recipe);
  }

// Filter my favoriteRecipes by one or more tags.

  
// Filter my favoriteRecipes by its name or ingredients.

}


export default User;
