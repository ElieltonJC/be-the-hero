import React from 'react';

/*
 * Dentro de return:
   <header>
     <h1>{props.title}</h1> // Utilizando do App.js: <Header title="Semana OmniStack"/>
   </header> 

//export default function Header(props){ // utilizado para referenciar props.title ou props.children no corpo
 * dentro do return ficaria assim:
     <header>
      <h1>{props.children}</h1> 
    </header>
*/
export default function Header({ children }){ // Passa como parâmetro o nome da props  
  // usa a props direto: <h1>{children}</h1> 
  return(
    <header>
      <h1>{children}</h1> 
    </header>
  )
}