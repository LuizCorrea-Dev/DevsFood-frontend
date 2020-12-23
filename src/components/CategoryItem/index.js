import React from 'react';
import { Container, CatagoryImage } from './styled';

export default ({data, activeCategory, setActiveCategory}) => { // array com os dados da categoria
    // quando o usuário clicar em categoria expecífica
    const handleCategoryClick = () => {
        setActiveCategory( data.id ); // será enviado o id da categoria expecífica
    } // quando isso acontecer, automaticamente troca o state, renderizando a categoria ativa quia foi alterada.

    return (
        <Container 
            active={activeCategory}
            id={data.id}
            onClick={handleCategoryClick}
            data-tip={data.name}
            data-for="tip-top"
        >
            <CatagoryImage src={data.image} />
        </Container>
    );
}
