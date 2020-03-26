## Anotações sobre a aula

Aqui vai ter os conteudos relevantes e teoricos e exemplos que não vão permanecer na aplicação final

### `Propriedades`

- codigo do app.js:

import React from 'react';
import Header from './Header';

function App() {
  return (
    <Header sounou="Sounou"/>
  );
}

export default App;

- codigo do header.js:

import React from 'react';

function Header(props) {
    return (
        <header>
            <h1>{props.sounou}</h1>
        </header>
    );
}

export default Header;

### `Propriedade por Herança`

- codigo do app.js:

import React from 'react';
import Header from './Header';

function App() {
  return (
    <Header>
        Title
    </Header>
  );
}

export default App;

- codigo do header.js:

import React from 'react';

function Header(props) {
    return (
        <header>
            <h1>{props.children}</h1>
        </header>
    );
}

### `Estado e Imutabilidade`

o estado é uma variavel que vc não edida seu valor diretamente, mas atraves de um metodo como mostra no codigo

- codigo do app.js:

import React, { useState } from 'react';
import Header from './Header';

function App() {
  const [counter, setCouter] = useState(0);

  //Array [valor, funçãoDeAtualizarValor]

  function incriment() {
    setCouter(counter + 1);
  }

  return (
    <div>
      <Header>Sounuo: {counter}</Header>
      <button onClick={incriment}>Incrementar</button>
    </div>
  );
}

export default App;