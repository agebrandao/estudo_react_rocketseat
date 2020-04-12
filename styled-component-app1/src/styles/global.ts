import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0:
        box-sizing: border-box;
    }

    body{
        
       
        font-size:14px;
        font-family: sans-serif;
        height: 100%;
    }

    body{
        -webkit-font-smoothig: antialiased;
      }

    body, input, button, label {
        font: 14px 'Roboto', sans-serif;
    }
    a{
        text-decoration: none;
    }

    button {
        cursor: pointer;
      }
`;

// const theme = {
//     colors: "mediumseagreen"

// #7D40E7

//  background:  ${props => props.theme.background}; 
//               ${ props => props.theme.colors.background};
//   };
//  background: ${ props => props.theme.colors.background};
// 