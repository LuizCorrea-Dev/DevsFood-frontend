import React from 'react';
import { 
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody
 } from './styled';

export default () => {
    return (
        <CartArea> {/* area do carrinho */}
            <CartHeader> {/* botão clicável para exibir o carrinho */}
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu Carrinho (x)</CartText> {/* exibe a quantidade de itens no carrinho */}

            </CartHeader>
            <CartBody> { /* Carrinho efetivamente*/}

            </CartBody>
        </CartArea>
    );
}