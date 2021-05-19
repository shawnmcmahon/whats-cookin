import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import sampleRecipesData from '../src/data/sampleRecipesData';
import sampleIngredientsData from '../src/data/sampleIngredientsData';
//import ingredients from '../src/data/ingredients';

describe('Recipe Class', () => {
  let recipe;

  beforeEach(() => {

    recipe = new Recipe(sampleRecipesData[0], sampleIngredientsData)

  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  })

  it('Should be instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  })

  it('Should contain an id property', () => {
    expect(recipe.id).to.equal(sampleRecipesData[0].id)
  })

  it('Should contain an image property', () => {
    expect(recipe.image).to.equal(sampleRecipesData[0].image)
  })

  it('Should contain an ingredients property', () => {
    expect(recipe.ingredients).to.equal(sampleRecipesData[0].ingredients)
  })

  it('Should contain an instructions property', () => {
    expect(recipe.instructions).to.equal(sampleRecipesData[0].instructions)
  })

  it('Should contain a tags property', () => {
    expect(recipe.tags).to.equal(sampleRecipesData[0].tags)
  })

  it('Should contain a propert that includes all ingredients data', () => {
    expect(recipe.ingredientsData).to.equal(sampleIngredientsData) //change later
  })

  it('Should contain a method that returns recipe instructions', () => {
    const recipeInstructions = recipe.retrieveRecipeInstructions()
    expect(recipeInstructions).to.eql([
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
      {
        "instruction": "Add egg and vanilla and mix until combined.",
        "number": 2
      },
      {
        "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
        "number": 3
      },
      {
        "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
        "number": 4
      },
      {
        "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
        "number": 5
      },
      {
        "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
        "number": 6
      }
    ])
  });

  it('Should contain a method that determins the names of ingredients needed', () => {
    const ingredientsNames = recipe.retrieveIngredientNames();
    expect(ingredientsNames).to.eql(
    [
    'wheat flour',
    'bicarbonate of soda',
    'eggs',
    'sucrose',
    'instant vanilla pudding',
    'brown sugar',
    'salt',
    'fine sea salt',
    'semi sweet chips',
    'unsalted butter'
    ]);
  });

  it('Should contain a method that calculates total recipe cost', () => {
    const totalCost = recipe.calculateRecipeCost();
    expect(totalCost).to.eql(173.13);
  })

})
