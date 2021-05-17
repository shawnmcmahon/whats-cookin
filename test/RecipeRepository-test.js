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
    expect(recipesByTag).to.eql(([
      "id": 678353,
        "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
        "ingredients": [
          {
            "id": 1009016,
            "quantity": {
              "amount": 1.5,
              "unit": "cups"
            }
          },
          {
            "id": 9003,
            "quantity": {
              "amount": 2,
              "unit": ""
            }
          },
          {
            "id": 20027,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 1002046,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 11215,
            "quantity": {
              "amount": 1,
              "unit": "clove"
            }
          },
          {
            "id": 1012046,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 19911,
            "quantity": {
              "amount": 0.25,
              "unit": "cup"
            }
          },
          {
            "id": 16112,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 10010062,
            "quantity": {
              "amount": 24,
              "unit": "ounce"
            }
          },
          {
            "id": 1102047,
            "quantity": {
              "amount": 4,
              "unit": "servings"
            }
          },
          {
            "id": 16124,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          },
          {
            "id": 1016168,
            "quantity": {
              "amount": 1,
              "unit": "tablespoon"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
            "number": 1
          }
        ],
        "name": "Maple Dijon Apple Cider Grilled Pork Chops",
        "tags": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ]
      },
      {
        "id": 412309,
        "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
        "ingredients": [
          {
            "id": 1002030,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 19334,
            "quantity": {
              "amount": 8,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1001,
            "quantity": {
              "amount": 2,
              "unit": "cups"
            }
          },
          {
            "id": 4582,
            "quantity": {
              "amount": 4,
              "unit": "servings"
            }
          },
          {
            "id": 2031,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 5100,
            "quantity": {
              "amount": 1,
              "unit": "pound"
            }
          },
          {
            "id": 2009,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 1022020,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 6168,
            "quantity": {
              "amount": 8,
              "unit": "cups"
            }
          },
          {
            "id": 9176,
            "quantity": {
              "amount": 0.5,
              "unit": "cup"
            }
          },
          {
            "id": 2026,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          },
          {
            "id": 1042047,
            "quantity": {
              "amount": 1.5,
              "unit": "tablespoons"
            }
          },
          {
            "id": 1042047,
            "quantity": {
              "amount": 4,
              "unit": "teaspoons"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
            "number": 1
          }
        ],
        "name": "Dirty Steve's Original Wing Sauce",
        "tags": [
          "sauce",
          "main dish"
        ]
      }]));
  });

  it('Should have a method that retrieves recipes by a name or ingredient', () => {
    const recipesByNameorIngredient = recipeRepository.retrieveRecipesByNameOrIngredient();
    expect(recipesByNameorIngredient).to.eql();
  })
})
