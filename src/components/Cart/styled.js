import styled from 'styled-components';

export const CartArea = styled.div`
    background-color: #136713;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: fixed;
    bottom: 0; // colado no inferior
    right: 30px; //junto da direita
`;

export const CartHeader = styled.div`
    width: 290px;
    height: 50px;
    display: flex; // pra ficar um item do lado do outro
    align-items: center; // centraliza os items
    cursor: pointer;

`;

export const CartIcon = styled.img`
    width: 23px;
    height: auto;
    margin:0 10px 0 10px; // espaçamento nos lados
`;

export const CartText = styled.div`
    color:#fff;
    font-size: 17px;
`;

export const CartBody = styled.div``;
