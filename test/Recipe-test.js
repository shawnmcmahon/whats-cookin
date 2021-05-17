import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import sampleRecipesData from '../src/data/sampleRecipesData';
import sampleIngredientsData from '../src/data/sampleIngredientsData';


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
    expect(recipe.ingredientsData).to.equal(sampleIngredientsData)
  })

})
