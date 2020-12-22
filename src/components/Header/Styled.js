import styled from 'styled-components';

export const Container = styled.div`
    background-color: #136713;
    border-radius: 10px;
    padding: 20px;
    display: flex; // porque tem do outro lado da row o campo de busca.
    justify-content: space-between;  // expaço entre os items >> Logo -- busca
    align-items: center; // centraliza verticalmente

`;

export const Logo = styled.img`
    width: auto;
    height: 70px;
`;

export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;
    width: ${props=>props.active ? 300 : 0}px; // se o campo estiver ativo recebe 300px se não ativo fica 0px.
    height: 50px;
    background-color: #fff;
    outline: 0; // sem contorno quando selecionado    
    background-image: url('./assets/search.png'); // imagem da lupa
    background-size: 30px; // tamanho da lupa
    background-repeat: no-repeat;
    background-position: 10px center; // lupa centralizada
    padding-left: 50px;
    font-size: 15px;
    transition: all ease 0.2s; // toda a mudança deste item terá a trasição de  0,2 segundos
    cursor: pointer;

    &:focus { // quando abrir o cursos muda o estilo para texto
        cursor:text;
    }

`;