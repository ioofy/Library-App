import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ListShippingComps from 'components/ListComps/ListShippingComps';

const ShippingCompsPages = () => {
  const [searchFilter, setSearchFilter] =
    useState('');

  return (
    <>
      <div className='flex w-full items-center justify-between'>
        <div className='flex'>
          <h1 className='text-2xl font-semibold'>
            Shipping Comps
          </h1>

          <button
            className='bg-blue-500 hover:bg-blue-700 text-white 
          font-bold rounded-full w-8 ml-4 flex items-center justify-center'
          >
            <Link to='/add/shipping-comps'>
              <BsPlus size={19} />
            </Link>
          </button>
        </div>

        <div>
          <div className='pt-2 mx-auto text-gray-600'>
            <input
              className='border-2 border-gray-300 bg-white 
              h-10 px-5 rounded-lg text-sm focus:outline-none'
              type='search'
              name='search'
              placeholder='🔍  Cari'
              onChange={(
                e: React.ChangeEvent<HTMLInputElement>
              ) =>
                setSearchFilter(e.target.value)
              }
            />
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <ListShippingComps
          filteredName={searchFilter}
        />
      </div>
    </>
  );
};

export default ShippingCompsPages;
