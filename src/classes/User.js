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

  addToRecipesToCook(recipe) {
    this.recipesToCook.push(recipe);
  }

  removeFromRecipesToCook(recipe) {
    const index = this.recipesToCook.indexOf(recipe);
    this.recipesToCook.splice(index, 1);
  }

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

retrieveFavoritesByNameOrIngredient(ingredientsData, ...keywords) {
  {
    const lowerCaseKeywords = keywords.map(keyword => keyword.toLowerCase());
    const results = lowerCaseKeywords.reduce((matchingRecipes, keyword) => {
      let foundIds;
      foundIds = ingredientsData.filter(ingredient => ingredient.name.includes(keyword)).map(ingredient => ingredient.id);
      this.favoriteRecipes.forEach(recipe => {
        if (recipe.name.includes(keyword) && !matchingRecipes.includes(recipe)) {
          matchingRecipes.push(recipe);
        }

        recipe.ingredients.forEach(ingredient => {
          foundIds.forEach(id => {
            if (id === ingredient.id && !matchingRecipes.includes(recipe)) {
              matchingRecipes.push(recipe);
            }

          })
        })
      })
      return matchingRecipes
    }, []);
    return results
    this.favoriteRecipes.forEach(recipe => {
      if (recipe.name.toLowerCase().includes(keyword)) {
        matchingRecipes.push(recipe);
      }

      recipe.ingredients.forEach(ingredient => {
        foundIds.forEach(id => {
          if (id === ingredient.id) {
            matchingRecipes.push(recipe);
          }

        })
      })
    });
    return matchingRecipes;
  }


  }

}


export default User;
