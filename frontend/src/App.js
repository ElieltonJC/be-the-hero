// Utilizando Header:
//import React, { useState } from 'react'; // controle de estado
// import Header from './Header';

import React from 'react'; // controle de estado
import './global.css';
// Antes de implementar as rotas "Router"
//import Logon from './pages/Logon';
import Routes from './routes';


// JSX (JavaScript XML)
function App() {
  return (
    <Routes />
  );

/* Utilizando Header:  
  //let counter = 0; // Antes do controle de estado e imutabilidade
  const [counter, setCounter] = useState(0); // Inicia com o valor zero

  // Estado = Array [valor, funcaoDeAtualizacao]

  function increment(){
    setCounter(counter + 1);

    /* Antes do controle de Imutabilidade
    counter += 1; // counter ++; 
    console.log(counter);    
  }

  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment} >Incrementar</button>
    </div>
    // <Header title="Semana OmniStack"/> // Utilizado para retornar a props title
    /*
    <Header>
      Semana Omnistack
    </Header>    
  );
  */  
}

export default App;
