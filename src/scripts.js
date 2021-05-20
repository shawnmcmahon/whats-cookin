import './styles.css';
import apiCalls from './apiCalls';
import Recipe from './classes/Recipe'
import RecipeRepository from './classes/RecipeRepository'
import Users from './classes/User'

let recipeRepository;
let globalIngredientsData = {}

function onStartUp() {
  apiCalls.getData()
    .then(([userData, ingredientsData, recipeData]) => {
      user = new User(userData[(Math.floor(Math.random() * userData.length))]);
      globalIngredientsData = ingredientsData;
      recipeRepository = new RecipeRepository(recipeData)
      //domUpdates function that populates all recipe cards to the home page

      //domUpdates function that will greet the user by updating the headline
    })
}




console.log('Hello world');
