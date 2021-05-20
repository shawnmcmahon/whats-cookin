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

  removeFromRecipesToCook(recipe) {
    const index = this.recipesToCook.indexOf(recipe);
    this.recipesToCook.splice(index, 1);
  }

// Filter my favoriteRecipes by one or more tags.

  filterFavoriteRecipesByTags(...tags) {
    const lowerCaseTags = tags.map(tag => tag.toLowerCase());
    let results = lowerCaseTags.reduce((matchingRecipes, tag) => {
      this.favoriteRecipes.forEach(recipe => {
        if (recipe.tags.includes(tag)) {
          matchingRecipes.push(recipe);
        }
      })
      return matchingRecipes
    }, []);
    return results;
  }

// Filter my favoriteRecipes by its name or ingredients.

retrieveFavoritesByNameOrIngredient(keyword, ingredientsData) {

  const lowerCaseKeyword = keyword.toLowerCase();

  const matchingRecipes = [];

  const foundIngredient = ingredientsData.filter(ingredient => ingredient.name.includes(lowerCaseKeyword)).map(ingredient => ingredient.id);

  this.favoriteRecipes.forEach(recipe => {
    if (recipe.name.toLowerCase().includes(lowerCaseKeyword)) {
      matchingRecipes.push(recipe);
    }
    recipe.ingredients.forEach(ingredient => {
      foundIngredient.forEach(id => {
        if (id === ingredient.id) {
          matchingRecipes.push(recipe);
        }
      })
    })
  });
  console.log('anyone home?', matchingRecipes);
  return matchingRecipes;
}



}


export default User;
