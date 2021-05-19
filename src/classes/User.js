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

  filterFavoriteRecipesByTags(...tags) {
    // The rest operator treats the args being passed in as if
    // they are in an array
    // args can be unlimited
    // make each tag lowercase:   tag.toLowerCase();
    const lowerCaseTags = tags.map(tag => tag.toLowerCase());
    console.log('favs I saves', this.favoriteRecipes);
    // Now I need to forEach over the array (lowerCaseTags)
    // To match each tag to the tags in each recipe
    const matchingRecipes = []
    let results = lowerCaseTags.forEach(tag => {
      this.favoriteRecipes.forEach(recipe => {
        if (recipe.tags.includes(tag)) {
          matchingRecipes.push(recipe);
        }
      })
    });
    return matchingRecipes;
  }

// Filter my favoriteRecipes by its name or ingredients.

}


export default User;
