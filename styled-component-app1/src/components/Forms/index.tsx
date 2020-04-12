import React, { useContext } from 'react';

import { Container, Title, Form, Row, Row1 } from  './styles';

const Header: React.FC = () =>{

   
    return(
        
        <Container>

            <Form>

                <form action="">
                  
                    <Title>
                        Cadastro de Destinatário

                        <div>
                            <button  type="submit" >Voltar</button>
                            <button  type="submit" >Salvar</button>
                        </div> 

                    </Title> 

                    <Row1>
                        <div>
                            <label htmlFor="">Nome</label>                
                            <input type="text"/>
                        </div>
                        
                    </Row1> 

                    <Row>
                        <div>
                            <label htmlFor="">Rua</label>
                            <input type="text"/>
                        </div>

                        <div>
                            <label htmlFor="">Número</label>
                            <input type="text"/>  
                        </div>
                        
                        <div>
                            <label htmlFor="">Complemento</label>
                            <input type="text"/>
                        </div>
                        
                    </Row>      

                    <Row>
                        <div>
                            <label htmlFor="">Cidade</label>
                            <input type="text"/> 
                        </div>
                        
                        <div>
                            <label htmlFor="">Estado</label>
                            <input type="text"/> 
                        </div>
                        
                        <div>
                            <label htmlFor="">CEP</label>
                            <input type="text"/>
                        </div>    

                    </Row>
                   
                    
                </form>
                
            </Form>
                 
        </Container>
    )
}

export default Header;