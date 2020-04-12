import styled  from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`

    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    display: flex;
    align-items: center; 
    justify-content: center;   
    width: 360px;
    height: 425px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #00000033;
    border-radius: 4px;
    opacity: 1;

    margin: 0 auto;
    margin-top: 140px;

    form {
        display: flex;
        flex-direction: column;       
    }

    div{
        display: flex;
        flex-direction: column;     
        margin: 0 0 10px;  
        width: 280px;           
    }

    input {
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        
        text-align: left;
        letter-spacing: 0;
        color: #999999;

        margin: 0 0 10px;
        &::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
    }

    button {
        width: 100%;
        margin: 10px 0 0;
        height: 44px;
        background: #3b9eff;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        &:hover {
        background: ${darken(0.03, '#3b9eff')};
        }
      }

      label{
        text-align: left;
        margin-bottom: 5px;
        font-weight: bold;
      }

`;

// export const LoginDiv = styled.div`

//     background: #7D4022;
    
//  align-items: center;
//         justify-content: center;
// `;
