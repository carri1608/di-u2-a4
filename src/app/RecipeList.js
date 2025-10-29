import { recipes } from './recipes.js';


export default function RecipeList() {

  const listRecetas = recipes.map(receta => 
    <>    
      <h2>{receta.name}</h2>
      <ul>
        {receta.ingredients.map(ingrediente => <li>{ingrediente}</li>)}
      </ul>
    </>

  );

  return (
    <div>
      <h1>Recetas</h1>
      {listRecetas}
    </div>
  );
}
