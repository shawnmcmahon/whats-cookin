import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import sampleRecipesData from '../src/data/sampleRecipesData';

let recipeRepository;

describe('Recipe', () => {


  beforeEach(() => {
    recipeRepository = new RecipeRepository(sampleRecipesData);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be an instance of RecipeRepository', () => {
    expect(recipeRepository).to.be.an.instanceof(RecipeRepository);
  });

  it('Should be have a property that contains recipe data', () => {
    expect(recipeRepository.recipesData).to.equal(sampleRecipesData);
  });

  it('Should have a method that retrieves recipes by a tag', () => {
    const recipesByTag = recipeRepository.retrieveRecipesByTag();
    expect()
  }
})
