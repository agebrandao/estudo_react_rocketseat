import React, { useState, useEffect } from 'react';
import api from './services/api';

import './Global.css';
import './Sidebar.css';

import Header from './Header';
import DevItem from './Components/DevItem/DevItem';
import DevForm from './Components/DevForm/DevForm';
// Ou 
// import DevForm from './Components/DevForm'; (Se for criado o arquivo index.js) Nao esquecer de style.js



// Estudar contexto no react



// import logo from './logo.svg';
// import './App.css';

// React utiliza :
// Componente: Retorna conteúdo html, javaScript (Um componente por arquivo)
// Estado: Informações mantidas pelo componente. A alteração da variavel diretamente não é reconhecida pelo react 
// Propriedade: props passa conteúdo entre componentes

// function App() {

//   // zero é o valor inicial
//   const [counter, setCounter] = useState(0);

//   function incrementCounter(){
//     setCounter(counter+1);
//   }

//   return (

//     <>
//       <h1>Contador: {counter}</h1>
//       <button onClick={incrementCounter}>botão</button>
//     </>

//     // <React.Component>
//     //   <Header title="Titulo 1"/>
//     //   <Header title="Titulo 2"/>
//     //   <Header title="Titulo 3"/>
//     // </React.Component>

//   );
// }


function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {

    // Cria a funcão
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);

    }
    // Executa a função
    loadDevs();

  }, [])

  async function handleAddDev(data) {


    const response = await api.post('/devs', data)

    console.log(response.data);

    // um array de devs que recebe todos os devs existentes mais o dev incluído
    setDevs([...devs, response.data]);

  }

  return (

    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <DevForm onSubmit={handleAddDev} />

      </aside>
      <main>

        <ul>
          {devs.map(dev => (
            <DevItem key="dev._id" dev={dev} />
          ))}

        </ul>
      </main>
    </div>

  );
}

export default App;
