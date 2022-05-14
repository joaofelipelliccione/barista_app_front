/* eslint-disable max-len */
import React from 'react';
import '../styles/Caption.css';

function Caption() {
  const captionsArray = [
    { captionTitle: 'Intensidade',
      captionDescription: 'É determinada pelo grau de torrefação, corpo e amargor do espresso. Não tem relação com o percentual de cafeína.',
    },
    { captionTitle: 'Torra',
      captionDescription: 'Quanto maior o nível, mais acentuado será o amargor e menos ácido será o café.',
    },
    { captionTitle: 'Amargor',
      captionDescription: 'É autoexplicativo, todavia, ressalta-se que quanto maior o nível, mais tempo o sabor do café permanecerá na boca.',
    },
    { captionTitle: 'Acidez',
      captionDescription: 'Quanto maior o nível, mais azedo será o sabor do café',
    },
    { captionTitle: 'Corpo',
      captionDescription: 'Quanto maior o nível, mais viscoso e denso será o café.',
    },
  ];
  return (
    <article className="captionContainer">
      <h3>Legenda</h3>
      {captionsArray.map(({ captionTitle, captionDescription }) => (
        <div key={ captionTitle } className="captionSubContainer">
          <h5>{ `${captionTitle}:` }</h5>
          <span>{ captionDescription }</span>
        </div>
      ))}
    </article>
  );
}

export default Caption;
