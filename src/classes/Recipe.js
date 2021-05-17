class Recipe {
  constructor(recipe, ingredientsData) {
    this.id =  recipe.id;
    this.image = recipe.image;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;

  }
}

export default Recipe;
