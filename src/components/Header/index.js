import React, { useState } from 'react';
import { Container, Logo, SearchInput } from './Styled';


export default ({search, onSearch}) => {
    const [inputActive, setInputActive] = useState(search == '' ? false : true); // se search for vazio então o campo será destivado e recolhido, caso contrário será ativo e expandido.

    const handleInputFocus = () => {// quando clicar no campo
        setInputActive(true); // ativa o campo 
    }
    const handleInputBlur = () => { // quando cursor sair do cima do campo
        if(search == '') { // só desativa e recolhe o campo se o campo estiver vazio
            setInputActive(false);// desativa o campo 
        }        
    }
    const handleChange = (e) => {
        onSearch(e.target.value); // manda o texto para a função
    }
    return (
        <Container>
            <Logo src="/assets/logo.png" />
            <SearchInput 
                type="text" 
                placeholder="Digite um produto..."
                value= {search} // tudo digitado vai para a state =setHeaderSearch da HomeScreem                
                onChange={handleChange} // quando for efetuado alguma alteração no campo, pega o valo e envia para o onSearch
                active={inputActive} // começa com o campo não ativo
                onFocus={handleInputFocus} // quando cursor aponta para o campo
                onBlur={handleInputBlur} // quando cursor saide cima do campo
            />
        </Container>
    );
}