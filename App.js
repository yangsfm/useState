import { useState } from 'react';

import Nome from './components/Nome'

function App(){
  const [aluno, setAluno] = useState('Sujeito Programador')
  
  function handleChangeName(nome) {
    setAluno(nome);
  }
  
  return(
  <div>
    <h1>Componente App</h1>
    <br/>
    <h2>Olá: {aluno} </h2>
    <button onClick={ () => handleChangeName('Yang') }>
      Mudar nome
    </button>
    {/* <Nome aluno ="Lucas" idade={30} /> */}

  </div>
  );
}

export default App;  

