import styled from 'styled-components';

export const Container = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-right: 10px;
    // quando o props da categoria for igaul ao props do id então será branco, caso contrario é verde
    background-color: ${props=>props.active == props.id ? '#fff' : '#AAE09A'};
    cursor: pointer;
    transition: all ease 0.3s;
`;

export const CatagoryImage = styled.img`
    width: 55px;
    height: 55px;
`;
