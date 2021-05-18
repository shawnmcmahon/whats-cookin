class RecipeRepository {
  constructor(recipesData) {
    this.recipesData = recipesData;
  }
  retrieveRecipesByTag(tag) {
    tag = tag.toLowerCase();
    let results = this.recipesData.filter(recipe => recipe.tags.includes(tag));
    return results
  }
  retrieveRecipesByNameOrIngredient(keyword) {
    // I want all of the names...but I want them lowercase so I can compare them
    // So can we take the names first
    keyword =  keyword.toLowerCase();
    const searchResults = [];
    const lowerCaseRecipeNames = this.recipesData.map(recipe => recipe.name.toLowerCase())
    console.log('lower case names here', lowerCaseRecipeNames)

    this.recipesData.forEach(recipe => {
      lowerCaseRecipeNames.forEach(name => {
        if (name === recipe.name) {
          searchResults.push(recipe)
        }
      })
    })

    return searchResults;

  }

  createNameProperty(recipe, ingredientsData) {
    let info = recipe.ingredients.map(ingredient => {
      const index = ingredientsData.findIndex(ingredientStat => ingredientStat.id === ingredient.id);
      return {name: ingredientsData[index].name}
    })
    return info;
  }


}

export default RecipeRepository;
