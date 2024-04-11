import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import './Productlist.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../Redux/Toggle';
import { addproducts } from '../Redux/Products';
import Products from '../Products/Product';

function Productlist() {
  const dispatch = useDispatch();
  const ProductsData = useSelector(state => state.products);
  const togglevalue = useSelector(state => state.toggle.togglefilter); // Accessing toggle value from Redux store

  // Fetching products details from API
  useEffect(() => {
    async function fetchProducts() {
      dispatch(toggleFilter("toggleloading")); // Dispatch toggle action to indicate loading
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(addproducts(response.data)); // Dispatch action to add fetched products to Redux store
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        dispatch(toggleFilter("toggleloading")); // Dispatch toggle action to indicate loading completion
      }
    }
    fetchProducts();
  }, [dispatch]); // Dispatch Dependency to ensure useEffect runs only when dispatch changes

  return (
    <div className={togglevalue ? "Productlist blur-background" : "Productlist"}>
      {ProductsData.length > 0 ? (
        ProductsData.map((product, index) => (
          <Products product={product} key={index} />
        ))
      ) : (
        <div className='NPA'>No products found</div>
      )}
    </div>
  );
}

export default Productlist;
