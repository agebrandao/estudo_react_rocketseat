import styled  from 'styled-components';

export const Container = styled.div`
    
    display: flex;

        /* eixo y */
    align-content: flex-start;

    /* eixo x */
    justify-content: center;

    /* Quebra a linha assim que um dos flex itens não puder mais ser compactado. */
    flex-wrap: wrap;

    top:0;
    width: 100vw;
    height: 100vh;

    background: #F5F5F5;
    opacity: 1;

    input {
        /* background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;     */
        

        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #DDDDDD;
        border-radius: 4px;
        opacity: 1;

        height: 34px;
        width:100%;

        text-align: left;
        letter-spacing: 0;
        color: #999999;

        padding: 0 5px;

        outline: none;

        font-size: 16px;
        
        margin: 30px;

        /* margin: 0 0 10px;
        &::placeholder {
            color: rgba(255, 255, 255, 0.7);
        } */
    }

    button {
        width: 100px;     
        /* margin: 10px 0 0; */
        margin-right:10px;
        height: 34px;
        background: #3b9eff;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
    
    }

    label{
        text-align: left;
        margin-bottom: 5px;
        font-weight: bold;        
    }

`;

export const DivMain = styled.div`

    display: flex;
    
    justify-content:space-between; 
    /* align-content: center; */
    align-items: center;
    width: 80%;  
    /* padding-bottom: 10px; */

    background: #F5F5F5;
    color:black;    

    text-align: center;
    text-transform: uppercase;   
    font-weight: bold;

    font-family: 'Montserrat', sans-serif;
    
`;

export const DivSearch =  styled(DivMain)`

   input {
       width:40vw;
   }
    
   padding-right: 30px;

`;

export const TableTitle =  styled(DivMain)`
    
    display: flex;

    /* eixo x */
    /* justify-content: center; */

    background: #F5F5F5;
    color:black;    

    /* min-width: 80%; */

    margin: 30px;

`;

export const TableRow =  styled(DivMain)`
    
    display: flex;
    background: white;

    /* min-width: 80%; */

    margin: 30px;

  

`;

// https://github.com/react-icons/react-icons
