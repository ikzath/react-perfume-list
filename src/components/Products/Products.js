import dataSet from '../../dataSet.json';
import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';
import { Select, Button, ButtonWrapper, ButtonContainer, ProductNoListing } from '../Products/ProductElements';
import Paginate from "../Paginate/Paginate";

const Products = () => {

    const [products] = useState(dataSet);
    const [filterByType, setFilterByType] = useState("All");
    const [filterByBrand, setFilterByBrand] = useState("All");
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const getUnique = ((items, value)=> {
        return [...new Set(items.map(item => item[value]))]
    })

    // get unique option value keys
    let types = getUnique(dataSet, 'type')
        types = ['All', ...types]
        types= types.map((option, idx) => (
        <option key={idx} value={option.type}>{option}</option>
    ))

    let brand = getUnique(dataSet, 'brand')
        brand = ['All', ...brand]
        brand= brand.map((option, idx) => (
        <option key={idx} value={option.brand}>{option}</option>
    ))

        function onChangeBrand(e){
            setFilterByBrand(e.target.value)
        }

        function onChangeType(e){
            setFilterByType(e.target.value)
        }

    
    useEffect(() => {
        let result = [...products]; 

        if(filterByType === 'All' && filterByBrand === 'All' ){
            setResults(result)
        }           
        if(filterByType !== 'All') {
            result = result.filter(item => item.type === filterByType);      
        }         
        if(filterByBrand !== 'All') {
            result = result.filter(item => item.brand === filterByBrand);      
        }  
        
        setResults(result)
        }, [ products, filterByBrand, filterByType])

        
        function onClickSort(){
            const dataArray = [ ...results]
            setResults(dataArray.sort((a,b) => a.name.localeCompare(b.name)));
        }

        function onClickSortDesc(){
            const dataArray = [ ...results]
            setResults(dataArray.sort((a,b) => b.name.localeCompare(a.name)));
        }

        function filterByPrice(){
            const dataArray = [ ...results]
            setResults(dataArray.sort((a,b) => a.price >b.price ? 1 : -1));
        }
          
        // Get current posts
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost);

        // Change page
        const paginate = pageNumber => setCurrentPage(pageNumber);
        
    return (
        <div data-testid='product-1'>
             <label> Filter by type : </label>
            <Select name='products' onChange={onChangeType}>
                {types}
            </Select><br />
            <label> Filter by brand : </label>
            <Select name='products' onChange={onChangeBrand} >
                {brand}
            </Select>
            <div>
            <ButtonContainer>
                <ButtonWrapper>
                    <Button data-testid='button-1' primary onClick={onClickSort}> Sort by ascending order </Button>  
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button data-testid='button-1' primary onClick={onClickSortDesc}> Sort by descending order </Button>  
                </ButtonWrapper>
                <ButtonWrapper>
                    <Button data-testid='button-1' primary onClick={filterByPrice}>Lowest to Highest Price </Button>  
                </ButtonWrapper>
            </ButtonContainer>
            </div>
            {results.length ?
           <ProductList products={currentPosts}/> :  <ProductNoListing>No such perfumes available</ProductNoListing> }
            <Paginate
                postsPerPage={postsPerPage}
                totalPosts={results.length}
                paginate={paginate}
            />        
        </div>
    )
}

export default Products;







