import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../Redux/Toggle';
import { filterproducts } from '../Redux/Products';
import axios from 'axios';
import './Filter.css'
function Filter() {
    const togglevalue = useSelector(state => state.toggle.togglefilter);
    const[mainProducts,setMainProducts] = useState();
    const [filterValues, SetFilterValues] = useState({
        category: "all",
        rating: "5",
        range: "1000",
    })
    const dispatch = useDispatch()
    //handle toggle for filters
    function toggle() {
        dispatch(toggleFilter("togglefilter"))
    }
    //handle on changes
    function handleInputChange(event) {
        const { name, value } = event.target;
        SetFilterValues({ ...filterValues, [name]: value });
    }
    //save filter
    function filterChanges() {
        const filteredProducts = mainProducts.filter(product => {

            if (filterValues.category !== "all" && product.category !== filterValues.category) {
                return false; 
            }
            if (parseFloat(filterValues.rating) < product.rating.rate) {
                return false;
            }
    
            // Filtering based on price range
            if (parseFloat(filterValues.range) <= product.price) {
                return false; 
            }
    
            return true; 
        });

        dispatch(filterproducts(filteredProducts));
        toggle();
    }
    //storing data to compare upcoming filters
    useEffect(()=>{
        async  function fetchProducts(){
          try {
              const response = await axios.get('https://fakestoreapi.com/products');
             setMainProducts(response.data);
      
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          }
      fetchProducts()
      },[]);
      
    return (
        <div className={togglevalue ? "Filter FD" : "Filter"}>
            <div className='FC'>
                <p>Category</p>
                <p onClick={toggle}>X</p>
            </div>
            <div className='Categorycon'>
                <select name="category" value={filterValues.category} onChange={handleInputChange}>
                    <option value="all">All</option>
                    <option value="men's clothing">Men's</option>
                    <option value="women's clothing">Women's</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="electronics">Electronics</option>
                </select>
            </div>
            <div className='Ratingcon'>
                <p>Rating</p>
                <select name="rating" value={filterValues.rating} onChange={handleInputChange}>
                    <option value="5">5-0 Stars</option>
                    <option value="4">4-0 Stars</option>
                    <option value="3">3-0 Stars</option>
                    <option value="2">2-0 Stars</option>
                    <option value="1">1-0 Stars</option>
                </select>
            </div>
            <div className='InputRange'>
                <div className='rangevalues'>
                    <p>0$</p>
                    <p>1000$</p>
                </div>
                <input type="range"
                    name="range"
                    min={0}
                    max={500}
                    value={filterValues.range}
                    onChange={handleInputChange} />
                <p>{filterValues.range}</p>
            </div>
            <button onClick={filterChanges}>Save</button>
        </div>
    )
}

export default Filter