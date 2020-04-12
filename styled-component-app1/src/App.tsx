import React from 'react';

import './App.css';
import Login from './components/Login';
import GlobalStyled from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';

function App() {

  return (
    // <ThemeProvider theme={ theme }>
      <React.Fragment>
        <div className="App">
            <GlobalStyled />
            <Login/>
        </div>
      </React.Fragment>

    // </ThemeProvider>

  );
}

export default App;
