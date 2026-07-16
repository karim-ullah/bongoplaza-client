import Link from 'next/link';
import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import AlertConfirm from './Alert';

const AddedProductCard = ({product}) => {
    return (
        <div className='flex items-center justify-between bg-slate-800 border border-slate-400/60 p-5 rounded-2xl'>

            <div>

            <h3 className='font-exo2 text-lg font-medium'>{product.title}</h3>
            <h4 className='text-sm font-dmSans font-medium text-slate-400'>${product.price}</h4>
            </div>
            <div className='flex items-center gap-3'>
                <Link href={`/shop/${product._id}`}><FaEye/></Link>
                <AlertConfirm product = {product}/>
            </div>
        </div>
    );
};

export default AddedProductCard;