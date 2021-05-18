

class RecipeRepository {
  constructor(recipesData) {
    this.recipesData = recipesData;
  }
  retrieveRecipesByTag(tag) {
    tag = tag.toLowerCase();
    let results = this.recipesData.filter(recipe => recipe.tags.includes(tag));
    return results
  }


  retrieveRecipesByNameOrIngredient(keyword, ingredientsData) {

    const lowerCaseKeyword = keyword.toLowerCase();

    const matchingRecipes = [];

    const foundIngredient = ingredientsData.filter(ingredient => ingredient.name.includes(lowerCaseKeyword)).map(ingredient => ingredient.id);

    this.recipesData.forEach(recipe => {
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

export default RecipeRepository;
