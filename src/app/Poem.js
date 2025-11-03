const poem = {
    lines: [
      'Escribo, borro y reescribo',
      'Borro de nuevo, y luego',
      'Florece una amapola.'
    ]
  };



  
  export default function Poem() {

    let salida = []
    poem.lines.forEach((line,i) => {
      salida.push(<hr/>)
      salida.push(<p key={i}>{line}</p>)
    });
    salida.shift();
    return (
      <article>
        {salida}
      </article>
    );
  }
  