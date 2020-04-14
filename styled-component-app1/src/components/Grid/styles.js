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

    form {
        display: flex;
        align-items: center;

        border: 1px solid #dddddd;
        border-radius: 4px;
        background: white 0 0 no-repeat padding-box; 
        border: 1px solid #dddddd;

        height:40px;

        padding-left:10px;

        max-width: 400px;

        input {

            background: #FFFFFF 0% 0% no-repeat padding-box;
            border: none;
            border-radius: 4px;
            opacity: 1;

            width:100%;            

            text-align: left;
            letter-spacing: 0;
            color: #999999;

            padding: 0 5px;

            outline: none;

            font-size: 16px;
            
            margin: 15px 0 20px 0;

            width:40vw;

        }
    }

    button {
        width: 100px;     
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

    tr{
        display: grid;
        grid-template-columns: 10vw 25vw 30vw 15vw;        
        text-align: left;        
    }

    th{
        padding: 15px 0 15px 15px ;
    }

    td{
        background: white;
        margin-bottom: 20px;
        height: 40px;
        padding: 15px 0 0 15px ;        
        color: #777777;
    }

    td:last-child, th:last-child {
        text-align: right;
        padding-right:30px;
        border-radius: 0 5px 5px 0;
    }
    
    td:first-child, th:first-child {
        border-radius: 5px 0 0 5px;
    }

`;

export const Div = styled.div`

    display: flex;
    
    justify-content:space-between; 
    align-items: center;
    width: 80%;  

    margin-top:20px;

    background: #F5F5F5;

    color:black;    

    text-align: center;
    text-transform: uppercase;   
    font-weight: bold;

    font-family: 'Montserrat', sans-serif;

`;

export const Icons = styled.span `

    color: ${props => props.color };
    opacity: 0.8;

    font-size:20px;

    cursor:  pointer;
`;
   


// https://github.com/react-icons/react-icons
