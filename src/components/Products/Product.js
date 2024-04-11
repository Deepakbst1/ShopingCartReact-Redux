import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Products({product}) {
    return (
        <div className='Products'>
            <div className='IC'>
                <img src={product?.image} alt="" />
            </div>
            <p>{product?.title}</p>
            <div className='PR'>
                <p>{product?.price} $</p>
                <div className='Rating'>
                    <p>{product?.rating.rate}</p>
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
            <button>Add to Your cart</button>
        </div>
    )
}

export default Products