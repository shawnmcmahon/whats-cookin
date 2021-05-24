

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
    const splitKeywords = keywords.map(keyword => {
      return keyword.split(' ');
    }).flat();
    console.log("WHAT is this?", splitKeywords);
    const lowerCaseKeywords = splitKeywords.map(keyword => keyword.toLowerCase());
    console.log("LowerCaseKeywrods", lowerCaseKeywords);
    const results = lowerCaseKeywords.reduce((matchingRecipes, keyword) => {
      console.log('KEYWORD', keyword);
      let foundIds = []
      ingredientsData.forEach(ingredient => {
        if (ingredient.name) {
          if(ingredient.name.split(' ').includes(keyword)) {
            foundIds.push(ingredient.id)
          }
        }
      })
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
