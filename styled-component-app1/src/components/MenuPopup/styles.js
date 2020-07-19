import styled  from 'styled-components';


export const Icons = styled.span `

    color: ${props => props.color };
    opacity: 0.8;
    margin-right: 5px;

    font-size:20px;

`;

export const DivPopup = styled.div`
    display: inline-block;
`;

export const Popup = styled.div `

   /* display: inline-block; */

    display: flex;
    justify-content: center;
    justify-items:stretch;
    align-content:center;
    flex-wrap: wrap;

    width:100px;

   margin-top: 5px;
   padding: 5px 8px;
   border: 1px solid #F5F5F5; 
   border-radius: 5px;

   a {
        text-decoration:none;
        color: #999999;
    }

`;

export const BordaTriangular = styled.div`

    display: inline-block;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 10px solid #0000001A;
    margin-bottom:-10px;

    /* width: 6px;
    height: 7px;
    box-shadow: 0px -2px 2px 1px #0000001A;
    border-radius: 10px 10px 0 0;
    margin-bottom:-10px; */

`;

export const Separator = styled.div `    
    border-bottom: 1px solid #F5F5F5;         
    opacity: 1;
    padding: 2px 0 2px 0;
`;