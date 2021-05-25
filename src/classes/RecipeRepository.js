class RecipeRepository {
  constructor(recipesData) {
    this.recipesData = recipesData;
  }

  retrieveRecipesByTag(...tags) {
    const lowerCaseTags = tags.map(tag => tag.toLowerCase());
    let results =  lowerCaseTags.reduce((matchingRecipes, tag) => {
      this.recipesData.forEach(recipe => {
        recipe.tags.forEach(currentTag => {
          if(tag === currentTag) {
            matchingRecipes.push(recipe);
          }

        })
      })
      return matchingRecipes
    }, [])
    return results
  }


  retrieveRecipesByNameOrIngredient(ingredientsData, ...keywords) {
    const splitKeywords = keywords.map(keyword => {
      return keyword.split(' ');
    }).flat();
    const lowerCaseKeywords = splitKeywords.map(keyword => keyword.toLowerCase());
    const results = lowerCaseKeywords.reduce((matchingRecipes, keyword) => {
    let foundIds = []
    ingredientsData.forEach(ingredient => {
      if (ingredient.name) {
        if(ingredient.name.split(' ').includes(keyword)) {
          foundIds.push(ingredient.id)
        }

      }
    })
    this.recipesData.forEach(recipe => {
    let splitWords = recipe.name.toLowerCase().split(' ');
      if (splitWords.includes(keyword) && !matchingRecipes.includes(recipe)) {
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
    return matchingRecipes;
  }, []);
  return results;
  }
}

export default RecipeRepository;
