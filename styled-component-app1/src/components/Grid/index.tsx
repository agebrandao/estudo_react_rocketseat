import React, { useContext } from 'react';

import { FaEdit  } from 'react-icons/fa';
import { MdDelete, MdSearch } from "react-icons/md";

import { Container, Div, Icons } from  './styles';

const Grid: React.FC = () =>{

    interface Destinatario {
        id: number;
        name: string;
        endereco: string;    
    }

    let destinatariosTest1: Destinatario = { 
        id: 1, 
        name: "Steve", 
        endereco:"Rua José de Holanda, 510" 
    };

    let destinatariosTest2: Destinatario = { 
        id: 1, 
        name: "Anna", 
        endereco:"Rua Zenóbio linx, 137" 
    };

    let arrayDestinatario: Array<Destinatario> = [];
    arrayDestinatario.push(destinatariosTest1);
    arrayDestinatario.push(destinatariosTest2);

    function rows(destinatarios: Array<Destinatario>) {

        const rows: Array<any> = [];

        if (destinatarios) {
            destinatarios.map(destinatariosItem => {
                rows.push(<tr key={destinatariosItem.id}>
                    {
                        <React.Fragment>
                            
                                <td >{destinatariosItem.id}</td>
                                <td >{destinatariosItem.name}</td>
                                <td>{destinatariosItem.endereco}</td>                          
                                <td >
                                    <div>
                                        <Icons color="#4D85EE"> <FaEdit/>  </Icons>
                                        <Icons color="#DE3B3B">  <MdDelete /> </Icons>
                                    </div>
                                </td>
                        </React.Fragment>
                    }
                </tr>)
            });
        }
        return rows
    }

    return(
        
        <Container>

            {/* <form action=""> */}
                
                <Div>
                    Cadastro de Destinatário
                </Div> 

                <Div>
                
                    <input type="text" placeholder=" Buscar por destinatários"/>
                    <button  type="submit" >Cadastrar</button>                
                </Div> 
                    <table>
                        <thead>                                
                            <tr>                                                               
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Endereço</th>
                                <th scope="col">Ações</th>                                
                            </tr>                            
                        </thead>
                        <tbody>
                            {rows(arrayDestinatario)}
                        </tbody>
                    </table>
                
            {/* </form> */}
                 
        </Container>
    )
}

export default Grid;