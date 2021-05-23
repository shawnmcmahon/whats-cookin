

class RecipeRepository {
  constructor(recipesData) {
    this.recipesData = recipesData;
  }

  retrieveRecipesByTag(...tags) {
    // const tagArray = [];
    // const tagArray.push(...tags);
    //console.log('tags here', tags)
    const lowerCaseTags = tags.map(tag => tag.toLowerCase());
    //console.log('lowerCaseTags', lowerCaseTags);
    let results =  lowerCaseTags.reduce((matchingRecipes, tag) => {
      //console.log('tag here', tag)
      this.recipesData.forEach(recipe => {
        //console.log('recipe here', recipe)
        recipe.tags.forEach(currentTag => {
          //console.log('recipe tags', recipe.tags)
          //console.log('currentTag', currentTag)
          //console.log('tag', tag);
          if(tag === currentTag) {
            //console.log('hello')
            //console.log('tag', tag);
            //console.log('current tag', currentTag)
            //console.log('matching recipes value before push', matchingRecipes)
            matchingRecipes.push(recipe);
            //console.log('are you pushing anything?', matchingRecipes)
          }
        })
        // if (recipe.tags.includes(tag)) {
        //   console.log('who are you tag?', tag);
          //console.log('recipe.tags', recipe.tags)
          //matchingRecipes.push(recipe);
      //   }
      })
      return matchingRecipes
    }, [])
    return results
  }


  retrieveRecipesByNameOrIngredient(ingredientsData, ...keywords) {
    const lowerCaseKeywords = keywords.map(keyword => keyword.toLowerCase());
    //console.log('lower case keywords', lowerCaseKeywords)
    const results = lowerCaseKeywords.reduce((matchingRecipes, keyword) => {
      let foundIds = []
      //console.log('keyword we want to search', keyword)
      ingredientsData.forEach(ingredient => {
      console.log('the ingredient name to be split', ingredient.name.split(' '))
    //  const splitIngredients = ingredient.name.split(' ');
        if(ingredient.name.split(' ').includes(keyword)) {
          foundIds.push(ingredient.id)
        }})
      //console.log('do we have ids?', foundIds);
      //console.log('is this an array?', ingredient.name);
      this.recipesData.forEach(recipe => {
      let splitWords = recipe.name.toLowerCase().split(' ');
      //console.log('split words query', splitWords)
        if (splitWords.includes(keyword) && !matchingRecipes.includes(recipe)) {
          matchingRecipes.push(recipe);
        }

        recipe.ingredients.forEach(ingredient => {
          foundIds.forEach(id => {
            if (id === ingredient.id && !matchingRecipes.includes(recipe)) {
              matchingRecipes.push(recipe);
            }

          })
        })
      })
      return matchingRecipes
    }, []);
    return results
    // this.recipesData.forEach(recipe => {
    //   if (recipe.name.toLowerCase().includes(keyword)) {
    //     matchingRecipes.push(recipe);
    //   }
    //
    //   recipe.ingredients.forEach(ingredient => {
    //     foundIds.forEach(id => {
    //       if (id === ingredient.id) {
    //         matchingRecipes.push(recipe);
    //       }
    //
    //     })
    //   })
    // });
    // return matchingRecipes;
  }
}

export default RecipeRepository;
