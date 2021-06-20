import dataSet from '../../dataSet.json';
import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList/ProductList';
import { Select, Button, ButtonWrapper } from '../Products/ProductElements';
import Paginate from "../Paginate/Paginate";

const Products = () => {

    const [products, setProducts] = useState(dataSet);
    const [filterByType, setFilterByType] = useState("all");
    const [filterByBrand, setFilterByBrand] = useState("all");
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const getUnique = ((items, value)=> {
        return [...new Set(items.map(item => item[value]))]
    })

    let types = getUnique(dataSet, 'type')
        types = ['all', ...types]
        types= types.map((option, idx) => (
        <option key={idx} value={option.type}>{option}</option>
    ))

    let brand = getUnique(dataSet, 'brand')
        brand = ['all', ...brand]
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

        if(filterByType === 'all' && filterByBrand === 'all' ){
            setResults(result)
        }  
         
        if(filterByType !== 'all') {
            result = result.filter(item => item.type === filterByType);      
        } 
        
        if(filterByBrand !== 'all') {
            result = result.filter(item => item.brand === filterByBrand);      
        } // else {setResults(result)}         
        
        setResults(result)

        }, [ products, filterByBrand, filterByType])

        
        function onClickSort(){
            const dataArray = [ ...results]
            setResults(dataArray.sort((a,b) => a.name.localeCompare(b.name)));
            console.log('cliked')
        }
          
        // Get current posts
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost);

        // Change page
        const paginate = pageNumber => setCurrentPage(pageNumber);
        
    return (
        <div>
             <label> Type : </label>
            <Select name='products' onChange={onChangeType}>
                {types}
            </Select><br />
            <label> Brand : </label>
            <Select name='products' onChange={onChangeBrand} >
                {brand}
            </Select>
            <div>
            <ButtonWrapper>
                <Button primary onClick={onClickSort}> Sort by ascending order </Button>  
                {/* <Button> Descending </Button> */}
            </ButtonWrapper>
            </div>
            {results.length ?
           <ProductList products={currentPosts}/> : <div>No such perfumes available</ div> }
            <Paginate
                postsPerPage={postsPerPage}
                totalPosts={results.length}
                paginate={paginate}
            />        
        </div>
    )
}

export default Products;







