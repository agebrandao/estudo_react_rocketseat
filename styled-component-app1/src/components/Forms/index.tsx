import React, { useContext } from 'react';

import { Container, Title, Form, Row, Row1, DivAlingLeft } from  './styles';

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
                        <DivAlingLeft>
                            <label htmlFor="">Nome</label>                
                            <input type="text"/>
                        </DivAlingLeft>
                        
                    </Row1> 

                    <Row>
                        <DivAlingLeft>
                            <label htmlFor="">Rua</label>
                            <input type="text"/>
                        </DivAlingLeft>

                        <DivAlingLeft>
                            <label htmlFor="">Número</label>
                            <input type="text"/>  
                        </DivAlingLeft>
                        
                        <DivAlingLeft>
                            <label htmlFor="">Complemento</label>
                            <input type="text"/>
                        </DivAlingLeft>
                        
                    </Row>      

                    <Row>
                        <DivAlingLeft>
                            <label htmlFor="">Cidade</label>
                            <input type="text"/> 
                        </DivAlingLeft>
                        
                        <DivAlingLeft>
                            <label htmlFor="">Estado</label>
                            <input type="text"/> 
                        </DivAlingLeft>
                        
                        <DivAlingLeft>
                            <label htmlFor="">CEP</label>
                            <input type="text"/>
                        </DivAlingLeft>    

                    </Row>
                   
                    
                </form>
                
            </Form>
                 
        </Container>
    )
}

export default Header;