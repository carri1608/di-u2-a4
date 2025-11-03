import { recipes } from './recipes.js';


export default function RecipeList() {

  const listRecetas = recipes.map(receta => 
    <div key={receta.id}>    
      <h2>{receta.name}</h2>
      <ul>
        {receta.ingredients.map(ingrediente => <li key={ingrediente}>{ingrediente}</li>)}
      </ul>
    </div>

  );

  return (
    <div>
      <h1>Recetas</h1>
      {listRecetas}
    </div>
  );
}
