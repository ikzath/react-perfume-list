import React from 'react';
import {
    ProductContainer,
    ProductContent,
    ProductTitle,
    ProductCardContent,
    ProductCard,
    ProductIconContainer,
    ProductIcon,
    ProductCardTitle,
    ProductCardText
} from '../Products/ProductElements';


export const ProductList = ({products}) => {
    return (
        <div data-testid='Perfume-List'>
             <ProductContent>
                <ProductTitle > Perfume List</ProductTitle>
                <ProductContainer>
                {products.map((item, idx)=> (
                    <ProductCardContent key={idx}>
                    <ProductCard>
                        <ProductIconContainer>
                            <ProductIcon src={item.image}/>
                        </ProductIconContainer>
                        <ProductCardTitle>{item.name}</ProductCardTitle>
                        <ProductCardText>{item.type}</ProductCardText>                         
                    </ProductCard>
                    </ProductCardContent>
                    ))}
                </ProductContainer>
            </ProductContent>
        </div>
    )
}

export default ProductList