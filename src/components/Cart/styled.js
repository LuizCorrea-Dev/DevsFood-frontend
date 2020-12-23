import styled from 'styled-components';


export const CartArea = styled.div`
    background-color:#136713;
    position:fixed;
    bottom:0;
    right:40px;    
    max-height:80vh;
    border-radius:10px 10px 0 0;
    @media screen and (max-width:425px){
        right:2%;    
    }
`;


export const CartHeader = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    align-self:center;
    line-height:51px;
    min-width:288px;
    cursor:pointer;
`;
export const CartIcon = styled.img`
    width:23px;
    height:auto;
    margin:0 14px;
`;
export const CartText = styled.div`
    flex:1;
    font-size:17px;
    color:white;
`;
export const CartBody = styled.div`
   display:${props=> props.show ? 'flex': 'none'};
   transition: .4s ease;
   height:100%;

`;
export const ProductsArea = styled.div`
    width:100%;
`;
export const ProductItem = styled.div`
    display:flex;
    border-bottom:1px solid #ffffff59;
    padding-bottom:10px;
    margin:0 14px;
    align-items: center;
`;
export const ProductPhoto = styled.img`
    width:64px;
    margin:0px 14px 0px 0px;
    border-radius:10px;
`;
export const ProductInfoArea = styled.div`
    flex:1;
`;
export const ProductName = styled.div`
    font-size:15px;
    color:#ffffff;
    margin-bottom:5px;
    font-weight:bold;

`;
export const ProductPrice = styled.div`
    font-size:13px;
    color:#ffffff;
    margin-bottom:5px;
`;
export const ProductQuantArea = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:30%;
`;

export const ProductIcon = styled.img`
    width:20px;
    height:auto;
    cursor:pointer;
    
`;
export const ProductNumber = styled.div`
    margin:0 10px;
    color:#ffffff;
    font-size:13px;
    font-weight:bold;
`;
export const ProductAreaEndereco = styled.div``;

export const ProductTitleEnd = styled.div``;

export const ProductEnderecoDice = styled.div``;

export const ProductAreaEndIcon = styled.div``;

export const ProductEndArea = styled.div``;

export const ProductDescriEnd = styled.div``;





