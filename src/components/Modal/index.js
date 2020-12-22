import React from 'react';
import { Container, ModalBody } from './styled';

export default ({status, setStatus, children }) => {

    const handleModalClick = (e) => { //  quando clicar no container, fora do modal body
        // se e.targer, pegar a lista de class que contém modalBg
        if(e.target.classList.contains('modalBg')) {
            setStatus(false); // tira o modal
        }
    }

    return (
        <Container  
            className="modalBg"
            status={status} 
            onClick={handleModalClick}
        > {/* tela preta de fundo */}
        
            <ModalBody>
                {children} {/* é o conteúdo do modal na página expecífica */}
            </ModalBody>
        </Container>
    );
}