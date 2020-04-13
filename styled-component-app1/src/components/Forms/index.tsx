import React, { useContext } from 'react';

import { Container, Title, Form, Row, DivAlingLeft } from  './styles';

const Forms: React.FC = () =>{

   
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

                    <Row aria-details="1fr">
                        <DivAlingLeft>
                            <label htmlFor="">Nome</label>                
                            <input type="text"/>
                        </DivAlingLeft>
                        
                    </Row> 

                    <Row aria-details="4fr 1fr 1fr">
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

                    <Row aria-details="2fr 2fr 2fr">
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

export default Forms;