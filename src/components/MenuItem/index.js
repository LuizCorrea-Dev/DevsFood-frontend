import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styled';

export default ({ title, icon, link}) => {

    const history = useHistory(); // troca a tela se carragar a página
    const handleLinkClick = (e) => {
        e.preventDefault(); // Nega o evento de click "href={link}" 
        history.push( link ); // usa o history para lincar se autalizar a tela
    }

    const location = useLocation();
    let isActive = location.pathname == link // compara a rota atual com o link de destino, retorna true ou false
        // podemos usar uma prop e estilizar em destaque 
    return (
        <LinkArea data-tip={title} data-for="tip-right" active={isActive} href={link} onClick={handleLinkClick}> {/* botão do menu */}
            <LinkIcon src={icon} /> {/* imagem do botão do menu */}
        </LinkArea>

    );
}