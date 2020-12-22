import styled from 'styled-components';

export const Container = styled.div` // página inteira
    display:flex;
    height: 100vh; // de cima até embaixo
    background-color: #ff5000;
`;

export const Menu = styled.div`// menu lateral
    display:flex;
    justify-content: center; // centraliza verticalmente
    align-items: center; // centraliza horizontalmente
    background-color: #136713;
    width: 80px;
    flex-direction: column; // um botão do menu abaixo do outro
`;

export const PageBody = styled.div` // area despecifica
    display:flex;
    background-color: #00980d; // a cor carrega antes da imagem com a masma cor
    background-image: url('/assets/bg.png');
    flex: 1; //pega o restante da tela
    overflow-y: auto;
    
`;