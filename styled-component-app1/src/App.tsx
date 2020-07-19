import React from 'react';

import './App.css';
import Login from './components/Login';
import Form from './components/Forms';
import Grid from './components/Grid';
import MenuPopup from './components/MenuPopup';

import GlobalStyled from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { FaEdit  } from 'react-icons/fa';


function App() {

  return (
    // <ThemeProvider theme={ theme }>
      <React.Fragment>
        <div className="App">
            {/* <GlobalStyled />
            <Login/> */}

            <MenuPopup textMenu="Editar" colorIcon="#4D85EE">
              <FaEdit/>
            </MenuPopup>


        </div>
      </React.Fragment>

    // </ThemeProvider>

  );
}

export default App;
