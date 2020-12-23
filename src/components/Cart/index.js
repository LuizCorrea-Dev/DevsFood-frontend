import React from 'react';
import { useSelector } from 'react-redux';
import { 
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody
 } from './styled';

export default () => {
    const products = useSelector(state => state.cart.products);


    return (
        <CartArea> {/* area do carrinho */}
            <CartHeader> {/* botão clicável para exibir o carrinho */}
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu Carrinho ({/*products.length*/}x)</CartText> {/* exibe a quantidade de itens no carrinho */}

            </CartHeader>
            <CartBody> { /* Carrinho efetivamente*/}

            </CartBody>
        </CartArea>
    );
}