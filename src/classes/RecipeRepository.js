class RecipeRepository {
  constructor(recipesData) {
    this.recipesData = recipesData;
  }
  retrieveRecipesByTag(tag) {
    // Filter through this.recipesData
    // this.recipesData.tags includes tag
    this.recipesData.filter(recipe => recipe.tags.includes(tag));
  }
  retrieveRecipesByNameOrIngredient() {

  }
}

export default RecipeRepository;
