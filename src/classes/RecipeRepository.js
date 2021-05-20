

class RecipeRepository {
  constructor(recipesData) {
    this.recipesData = recipesData;
  }

  retrieveRecipesByTag(...tags) {
    const lowerCaseTags = tags.map(tag => tag.toLowerCase());
    let results =  lowerCaseTags.reduce((matchingRecipes, tag) => {
      this.recipesData.forEach(recipe => {
        if (recipe.tags.includes(tag)) {
          matchingRecipes.push(recipe);
        }
      })
      return matchingRecipes
    }, [])
    return results


    // let results = this.recipesData.filter(recipe => recipe.tags.includes(tag));
    // return results
  }


  retrieveRecipesByNameOrIngredient(ingredientsData, ...keywords) {
    const lowerCaseKeywords = keywords.map(keyword => keyword.toLowerCase());
    const results = lowerCaseKeywords.reduce((matchingRecipes, keyword) => {
      let foundIds;
      foundIds = ingredientsData.filter(ingredient => ingredient.name.includes(keyword)).map(ingredient => ingredient.id);
      this.recipesData.forEach(recipe => {
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
    this.recipesData.forEach(recipe => {
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

export default RecipeRepository;
