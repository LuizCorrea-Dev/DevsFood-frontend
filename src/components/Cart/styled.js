import styled from 'styled-components';

export const CartArea = styled.div`
    background-color:#136713;
    position:fixed;
    bottom:0px;
    padding-bottom:${props=> props.show ? '10': '0'}px;
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
        min-width:300px;
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
    transition: all 0.4s ease;
    height:100%;
    color: #fff;
    flex-direction: column;

    `;

        export const ProductsArea = styled.div`
            width:100%;
            border-bottom:1px solid #ffffff59;
            padding-bottom:10px;
        `;

            export const ProductItem = styled.div`
                display:flex;
                 margin:5px 10px;
                //align-items: center;
            `;
                export const ProductPhoto = styled.img`
                    width:64px;
                    height: auto;
                    //margin:0px 14px 0px 0px;
                    border-radius:10px;
                `;
                export const ProductInfoArea = styled.div`
                    flex:1;
                    margin-left: 10px;
                `;

                    export const ProductName = styled.div`
                        font-size:13px;                        
                        //margin-bottom:5px;
                        font-weight:bold;
                    `;

                    export const ProductPrice = styled.div`
                        font-size:13px;                        
                        //margin-bottom:5px;
                    `;

                export const ProductQuantArea = styled.div`
                    display:flex;
                    justify-content:flex-end;
                    align-items:center;
                    width:30%;
                `;

                    export const ProductQtIcon = styled.img`
                        width:13px;
                        height:auto;
                        cursor:pointer;                        
                    `;
                    export const ProductQtText = styled.div`
                        margin:0 5px;                        
                        font-size:13px;
                        font-weight:bold;
                    `;

export const ProductAreaAddress = styled.div`
    margin: 10px;
`;

export const ProductIcon = styled.img`
    width:13px;
    height:auto;
    padding-bottom: 10px;

`;

    export const ProductTitleAddress = styled.div`
        font-weight: bold;
        text-align: left;
        padding: 10px 0;  
    `;


export const ProductEndArea = styled.div`   

`;

export const ProductTitleEnd = styled.div`
    font-style: italic;
    font-size: 13px;
    padding-bottom: 5px;
 `;

export const ProductAddressEnd = styled.div`
    font-size: 13px;
`;

export const ProductCityEnd = styled.div`   
    font-size: 13px;
`;

export const ProductStateEnd = styled.div`
    font-size: 13px;
 `;



export const ProductAreaDiscounts = styled.div`
    font-weight: bold;
    text-align: left;
    padding: 10px; 
 `;
 export const ProductTitleDiscounts = styled.div`

 `;
 export const ProductDiscountsInput = styled.input`
    margin: 10px 0;
    border: 0;
    border-radius: 10px;
    width: 270px; 
    height: 30px;
    background-color: #fff;
    outline: 0;  
    font-size: 13px;    
    cursor:text;
    padding-left: 5px;
 `;


export const ProductAreaSubtotal = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    font-weight: bold;
    font-size: 13px;
`;
export const ProductDiscounts = styled.div``;
export const Discount = styled.div`
    font-weight:normal;
    text-align: right;
`;
export const ProductTax = styled.div`

`;
export const Tax = styled.div`
    font-weight:normal;
    text-align: right;
`;
export const ProductTotal = styled.div`

`;
export const Total = styled.div`
    font-weight:normal;
    text-align: right;
`;

export const Checkout = styled.button`
    margin: 0 auto; 
    width: 270px; 
    height: 40px;
    margin-top: 20px;
    text-align: center;
    border: 0;
    outline: 0;
    border-radius: 25px;   
    background-color: #0B4D0B;
    color: #fff;
    font-size: 13px;
    font-weight: bold;
    text-align: center;    
    cursor: pointer;

    :hover {
        background-color: #053005;
        transition: all .3s ease-out;
    }

`;

 