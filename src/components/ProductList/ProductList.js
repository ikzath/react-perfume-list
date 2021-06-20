import React from 'react';
import {
    WorksContainer,
    WorksContent,
    WorksTitle,
    WorksCardContent,
    WorksCard,
    WorksIconContainer,
    WorksIcon,
    WorksCardTitle,
    WorksCardText
} from '../Products/ProductElements';


export const ProductList = ({products}) => {
    return (
        <div>
             <WorksContent>
                        <WorksTitle> Products</WorksTitle>
                        <WorksContainer>
                        {products.map((item, idx)=> (
                        <WorksCardContent key={idx}>
                        <WorksCard>
                            <WorksIconContainer>
                                <WorksIcon src={item.image}/>
                            </WorksIconContainer>
                            <WorksCardTitle>{item.name}</WorksCardTitle>
                            <WorksCardText>{item.type}</WorksCardText>                         
                        </WorksCard>
                        </WorksCardContent>
                         ))}
                </WorksContainer>
            </WorksContent>
        </div>
    )
}

export default ProductList