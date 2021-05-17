class RecipeRepository {
  constructor(recipesData) {
    this.recipesData = recipesData;
  }
  retrieveRecipesByTag(tag) {
    tag = tag.toLowerCase();
    let results = this.recipesData.filter(recipe => recipe.tags.includes(tag));

    return results
  }
  retrieveRecipesByNameOrIngredient() {

  }
}

export default RecipeRepository;
