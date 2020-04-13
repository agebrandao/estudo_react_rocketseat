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

        /* margin-bottom: 100px; */
    

`;

export const Form =  styled.div`
    
    display: flex;

    /* eixo x */
    justify-content: center;

    background: white;

    /* min-width: 80%; */

    margin: 30px;

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
        
        margin: 0 0 10px;
        &::placeholder {
            color: rgba(255, 255, 255, 0.7);
        }
    }

    button {
        width: 100px;     
        margin: 10px 0 0;
        margin-right:10px;
        height: 44px;
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

export const Title = styled.div`

    display: flex;
    
    justify-content:space-between; 
    /* align-content: center; */
    align-items: center;
    width: 100%;  
    padding-bottom: 10px;

    background: #F5F5F5;
    color:black;    

    text-align: center;
    text-transform: uppercase;   
    font-weight: bold;

    font-family: 'Montserrat', sans-serif;
    
`;

export const Row =  styled.div`
    display: grid;
    grid-template-rows: auto;

    /* 
        Row1: grid-template-columns: 1fr;
        Row2: grid-template-columns: 4fr 1fr 1fr;
        Row3: grid-template-columns: 2fr 2fr 2fr;
     */
    grid-template-columns: ${props => props["aria-details"] || "1fr"};
    gap: 30px;
    
    margin:10px 40px;    
`;

// export const Row1 =  styled(Row)`
//     grid-template-columns: 1fr;
// `;

// export const Row2 =  styled(Row)`

//     grid-template-columns: 4fr 1fr 1fr;
// `;

// export const Row3 =  styled(Row)`
//     grid-template-columns: 2fr 2fr 2fr;
// `;

export const DivAlingLeft =  styled.div`
    display: grid;
    justify-content:flex-start;
    grid-template-columns: 1fr;
    
`;

 /* &:hover {
            background: ${darken(0.03, '#3b9eff')};
        } */