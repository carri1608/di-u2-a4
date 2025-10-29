import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listCientificos = people.filter(person => person.profession === 'químico').map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );

    const listNoCientificos = people.filter(person => person.profession != 'químico').map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );

  return (
    <article>
      <h1>Científicos</h1>
      <ul>{listCientificos}</ul>
      <ul>{listNoCientificos}</ul>
    </article>
  );
}
