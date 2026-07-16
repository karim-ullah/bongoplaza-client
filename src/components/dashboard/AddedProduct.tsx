
import React from 'react';
import AddedProductCard from './AddedProductCard';

const AddedProduct = ({products}) => {
   
    return (
        <div>
        <h2 className="font-exo2 text-3xl font-bold mb-0.5 mt-6">Your Added Product</h2>
        <span className="text-[#6B7A99] font-dmSans">Manage your Added Product from here.</span>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-6'>
            {
                products.map(product => <AddedProductCard key={product._id} product={product}/>)
            }
        </div>
      </div>
    );
};

export default AddedProduct;