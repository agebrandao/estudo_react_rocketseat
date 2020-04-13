import React, { useContext } from 'react';

import { Container, DivMain, TableTitle, TableRow, DivSearch } from  './styles';

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
                            <TableRow>
                                <td >{destinatariosItem.id}</td>
                                <td >{destinatariosItem.name}</td>
                                <td>{destinatariosItem.endereco}</td>                          
                                <td >

                                    <label htmlFor=""><i className="fa fa-pencil"></i> edit</label> 

                                    &nbsp; &nbsp;      

                                    <label htmlFor=""><i className="fa fa-trash"></i> remove</label>

                                </td>
                            </TableRow>
                        </React.Fragment>
                    }
                </tr>)
            });
        }
        return rows
    }

    return(
        
        <Container>

            {/* <Form> */}

                {/* <form action=""> */}
                  
                    <DivMain>
                        Cadastro de Destinatário
                    </DivMain> 

                    <DivSearch>
                        <input type="text" placeholder="Buscar por destinatários"/>
                        <button  type="submit" >Cadastrar</button>                
                    </DivSearch> 
                        <table>
                            <thead>                                
                                <tr>
                                    <TableTitle>
                                        {/* <th scope="col">#</th> */}
                                        <th scope="col">ID</th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Endereço</th>
                                        <th scope="col">Ações</th>
                                    </TableTitle>
                                </tr>
                               
                            </thead>
                            <tbody>
                                {rows(arrayDestinatario)}
                            </tbody>
                        </table>
                    

                    
                    
                {/* </form> */}
                
            {/* </Form> */}
                 
        </Container>
    )
}

export default Grid;