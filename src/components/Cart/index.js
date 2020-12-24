import React, { useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    CartArea,
    CartHeader,
    CartIcon,
    CartText,
    CartBody,
    ProductsArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantArea,
    ProductQtIcon,
    ProductQtText,

    ProductAreaAddress,
    ProductTitleAddress,
    ProductIcon,
    ProductEndArea,
    ProductTitleEnd,
    ProductAddressEnd,
    ProductCityEnd,
    ProductStateEnd,

    ProductAreaDiscounts,
    ProductTitleDiscounts,
    ProductDiscountsInput,
    ProductDiscounts,
    ProductAreaSubtotal,
    Discount,
    ProductTax,
    Tax,
    ProductTotal,
    Total,

    Checkout,   

} from './styled';

export default () => {

    const dispatch = useDispatch();

    const products = useSelector(state=> state.cart.products);

    const [show, setShow] = useState(true) ;

    const handleCardClick =() =>{
        setShow(!show)
    }

    const handleProductChange = (key, type) => {
        // alert(key+' = '+type);
        dispatch({
            type:'CHANGE_PRODUCT',
            payload:{key,type}
        });
    }


    return (
        <CartArea show={show}>
            <CartHeader onClick={handleCardClick}>

                <CartIcon src="/assets/cart.png"/>             
                <CartText>Meu Carrinho ({products.length})</CartText>

                { show &&
                    <CartIcon src="/assets/down.png" />
                }
                         
            </CartHeader>

            <CartBody show={show}>
                <ProductsArea>
                    {products.map((item, index) => (

                        <ProductItem key={index}>

                            <ProductPhoto src={item.image}/>
                            
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            
                            <ProductQuantArea>
                                <ProductQtIcon src="/assets/minus.png"
                                    onClick={()=> handleProductChange(index, '-')}
                                />

                                <ProductQtText>{item.qt}</ProductQtText>
                                
                                <ProductQtIcon src="/assets/plus.png"
                                    onClick={()=> handleProductChange(index, '+')}
                                />
                            </ProductQuantArea>

                        </ProductItem>
                    ))}
                    
                </ProductsArea>
            
                <ProductAreaAddress show={show}>
                    <ProductTitleAddress>Entrega</ProductTitleAddress> 
                    <ProductIcon src="/assets/edit.png"/> 

                    <ProductEndArea>
                        <ProductTitleEnd>Minha casa</ProductTitleEnd>
                        <ProductAddressEnd>Av. Paulista, 999</ProductAddressEnd>
                        <ProductCityEnd>São Paulo</ProductCityEnd>
                        <ProductStateEnd>SP</ProductStateEnd>
                    </ProductEndArea>

                    

                </ProductAreaAddress>
                
                <ProductAreaDiscounts>
                    <ProductTitleDiscounts>Cupom de desconto</ProductTitleDiscounts> 
                    
                    <ProductDiscountsInput
                    type="text" 
                    placeholder="Digite código de desconto..."
                    />
                </ProductAreaDiscounts>

                <ProductAreaSubtotal>
                    <ProductDiscounts>Desconto</ProductDiscounts>
                        <Discount>R$ 0,00</Discount>
                    <ProductTax>Taxa de entrega</ProductTax>
                        <Tax>R$ 7,99</Tax>
                    <ProductTotal>Total</ProductTotal>                    
                        <Total>R$ 124,31</Total>
                </ProductAreaSubtotal>

                <Checkout>FINALIZAR COMPRA</Checkout>     
            </CartBody>                                   
        </CartArea>
    );
}