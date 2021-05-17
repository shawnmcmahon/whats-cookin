import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import sampleRecipesData from '../src/data/sampleRecipesData.js';

describe('Recipe', () => {

  let recipeRepository;

  beforeEach(() => {
    recipeRepository = new RecipeRepository(sampleRecipesData);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
})
