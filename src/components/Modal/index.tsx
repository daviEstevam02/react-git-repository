import { Conteiner, Content } from "./style";
import  React from 'react';
import {FaTimes} from 'react-icons/fa';

interface ModalProps {
    isOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<ModalProps> = ({isOpen, children, setModalOpen}) => {

    if(!isOpen) return null;

    return(
        <Conteiner>
            <Content>                
                <button className="exit" type='button' onClick={() => setModalOpen(false)}>
                    <FaTimes size={16} color="#dfdbdb"/>
                </button>
                {children}  
            </Content>
        </Conteiner>
    );

}