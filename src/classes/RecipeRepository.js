

class RecipeRepository {
  constructor(recipesData) {
    this.recipesData = recipesData;
  }

  retrieveRecipesByTag(...tags) {
    const lowerCaseTags = tags.map(tag => tag.toLowerCase());
    let results =  lowerCaseTags.reduce((matchingRecipes, tag) => {
      this.recipesData.forEach(recipe => {
        if (recipe.tags.includes(tag)) {
          matchingRecipes.push(recipe);
        }
      })
      return matchingRecipes
    }, [])
    return results


    // let results = this.recipesData.filter(recipe => recipe.tags.includes(tag));
    // return results
  }


  retrieveRecipesByNameOrIngredient(ingredientsData, ...keywords) {
    // an array [tag1, tag2, tag3]
    //console.log(keywords);

    const lowerCaseKeywords = keywords.map(keyword => keyword.toLowerCase());
    //const matchingRecipes = [];
    // iterate over array of keywords
    // const foundIngredient = ingredientsData.filter(ingredient => ingredient.name.includes(lowerCaseKeywords)).map(ingredient => ingredient.id);
    // let foundIds;
    // lowerCaseKeywords.forEach(keyword => {
    //   foundIds = ingredientData.filter(ingredient => ingredient.name.includes(keyword)).map(ingredient => ingredient.id);
    // })
    //
    const results = lowerCaseKeywords.reduce((matchingRecipes, keyword) => {
      // Iterate over keywords array so that we can compare each keyword to what is in ingredient.name
      //console.log("i data", ingredientsData)
      //console.log('accumulator', matchingRecipes)
      //console.log('the current keyword', keyword)
      let foundIds;
      foundIds = ingredientsData.filter(ingredient => ingredient.name.includes(keyword)).map(ingredient => ingredient.id);
      //console.log('foundIDS', foundIds)

      this.recipesData.forEach(recipe => {
        if (recipe.name.includes(keyword) && !matchingRecipes.includes(recipe)) {
          //console.log('recipe name', recipe)
          matchingRecipes.push(recipe);
          //console.log('matchingRecipes', matchingRecipes)
        }
        recipe.ingredients.forEach(ingredient => {
          // console.log('the ingredient we are on is:', ingredient)
          foundIds.forEach(id => {
            //console.log('id', id)
            if (id === ingredient.id && !matchingRecipes.includes(recipe)) {
              //console.log('recipeToBePushed, recipe')
              matchingRecipes.push(recipe);
            }
          })
        })
      })
      console.log('matchingRecipes', matchingRecipes)
      return matchingRecipes
    }, []);
    //console.log('the results', results)
    return results




    this.recipesData.forEach(recipe => {
      if (recipe.name.toLowerCase().includes(keyword)) {
        matchingRecipes.push(recipe);
      }
      recipe.ingredients.forEach(ingredient => {
        //console.log('foundsIDs', foundIds)
        foundIds.forEach(id => {
          //console.log('foundIds', foundIds);
          //console.log("each id", id)
          if (id === ingredient.id) {
            matchingRecipes.push(recipe);
          }
        })
      })
    });
    //console.log('anyone home?', matchingRecipes);
    return matchingRecipes;
  }
}

export default RecipeRepository;
