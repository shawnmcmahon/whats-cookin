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


  retrieveIngredientNames() {
    const ingredientIds = this.ingredients.map(ingredient => ingredient.id);
    const ingredientNames = [];
    this.ingredientsData.forEach(ingredient => {
      ingredientIds.forEach(id => {
        if (id === ingredient.id) {
          ingredientNames.push(ingredient.name);
        }
      })
    })
    console.log('Ingredient Names', ingredientNames);
    return ingredientNames;
  }


}

export default Recipe;
