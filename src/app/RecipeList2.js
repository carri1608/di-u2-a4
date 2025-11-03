import { recipes } from './recipes.js';

function RecipeMap({id,name,ingredients}){
  return(
    <div key = {id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
      </ul>
    </div>
  )
}

export default function RecipeList2() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map(recipe =>
      (<RecipeMap id={recipe.id} name={recipe.name} ingredients={recipe.ingredients}></RecipeMap>))}
    </div>
  );
}
