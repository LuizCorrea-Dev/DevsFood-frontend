import styled from 'styled-components';

export const Container = styled.div` // tela preta de fundo
    display: ${props=>props.status ? 'flex': 'none'}; // se tiver status aparece, senão nao aparece
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background-color: rgba(0,0,0,0.7);
    z-index: 900;
    justify-content: center;
    align-items: center;
`;

export const ModalBody = styled.div` // tela branca fundo do corpo
    background-color: #fff; 
    border-radius: 20px;
    box-shadow: 0px 0px 50px #000;
    max-width: 100vw;
    max-height: 90vh;
    overflow: auto;
`;
