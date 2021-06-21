import React from 'react';
import { Select, SelectWrapper } from './SelectProductsElements';

function SelectProducts({ types, brand, onChangeType, onChangeBrand}) {
    return (
        <div>
            <SelectWrapper>            
            <label> Type : </label>            
            <Select onChangeType>
                {types}
            </Select><br />
            <label> Brand : </label>
            <Select onChangeBrand >
                {brand}
            </Select>
            </SelectWrapper>
        </div>
    )
}

export default SelectProducts
