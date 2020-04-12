import React, { useContext } from 'react';

import { Container} from './styles';
import Avatar from '../Avatar';

const Login: React.FC = () =>{
   
    return(
        <Container>
 
            <form action="">

                <div> <Avatar/> </div>
               
                <div>
                    <label htmlFor="">E-MAIL</label>
                    <input type="text"/>
                </div> 

                <div>
                    <label htmlFor="">SENHA</label>
                    <input type="password"/>
                </div>      

                <button  type="submit" >Entrar no Sistema</button>     
            </form>
        </Container>
    )
}

export default Login;