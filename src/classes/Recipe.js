class Recipe {
  constructor(recipe, ingredientsData) {
    this.id =  recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients; // an array of objects
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;
  }

  retrieveRecipeInstructions() {
    return this.instructions;
  }
  // to determine names of ingredients needed

}

export default Recipe;
