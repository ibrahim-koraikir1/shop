import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
 
  const { id } = useParams();

  
  
  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      
    </section>
  );
};

export default ProductDetails;
