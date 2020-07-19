import React, { useContext } from 'react';

import { Icons, Popup, Separator, BordaTriangular, DivPopup } from  './styles';

import * as ReactIcons from 'react-icons';
import { FaEdit  } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";


type PopupItem = {
    colorIcon: string
    textMenu: string
}

type Popups = {
    popupItens: PopupItem[];
}

const MenuPopup: React.FC<PopupItem> = (props) =>{

   
    return(
        
        <React.Fragment> 
            {/* <ul>
                <menu> <Icons color="#4D85EE"> <FaEdit/>  </Icons> Editar </menu>
                <menu className="divider"></menu>
                <menu> <Icons color="#DE3B3B">  <MdDelete /> </Icons> Excluir </menu>                
                
            </ul> */}

            {/* props.popupItens.map(popupItem => <Popups> {
                <Popup>                
                    <a href="#"><Icons color={popupItem.colorIcon}> {popupItem.children}  </Icons> {popupItem.textMenu} </a>
                    <Separator/>
                </Popup>
            }); */}
            
            
            <DivPopup>
                <BordaTriangular/>
                <Popup>     
                
                    <div>
                        <a href="#"><Icons color={props.colorIcon}> {props.children}  </Icons> {props.textMenu} </a>
                    </div>                           
                    <Separator/>
                    <div>
                        <a href="#"><Icons color="#DE3B3B">  <MdDelete /> </Icons> Excluir</a>                                                        
                    </div>
                
                </Popup>
            </DivPopup>
            
            
        </React.Fragment>
                                 
    )
}

export default MenuPopup;