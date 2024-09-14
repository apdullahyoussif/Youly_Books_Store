import React from 'react';
import ProductItem from './ProductItem';


function ProductList({ products }) {
  return (


    <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 '>
      {products.map(item => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>

  );
}

export default ProductList;
