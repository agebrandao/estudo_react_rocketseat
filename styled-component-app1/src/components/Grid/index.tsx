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
        name: "Anna", 
        endereco:"Rua José de Holanda, 510" 
    };

    let destinatariosTest2: Destinatario = { 
        id: 2, 
        name: "Gabriela", 
        endereco:"Rua Zenóbio lins, 137" 
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
                
                <Div>
                    Gerenciando Destinatários
                </Div> 

                <Div>
                    <form action="">
                        <Icons color="#999999">
                            <MdSearch size={25}/>
                            {/* <MdSearch size={25} color="#999999" /> */}
                        </Icons>                        
                        <input type="text" placeholder=" Busca por destinatários"/>
                    </form>
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
                
                 
        </Container>
    )
}

export default Grid;