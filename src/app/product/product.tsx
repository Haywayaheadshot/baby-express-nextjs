import React from 'react';
import Image from 'next/image';
import bottleGirl from '../../../public/girl_feeding_bottle.png';
import bottleBoy from '../../../public/boy_feeding_bottle.png'

const Products = () => {
  return (
    <>
    <div className="border-2 border-#fff p-2 rounded-md shadow-md shadow-zinc-500 flex flex-col gap-5">
        <Image
          src={bottleGirl}
          alt="Girl holding feeding bottle"
        />
        <span>GHs50.00</span>
    </div>
    <div className="border-2 border-#fff p-2 rounded-md shadow-md shadow-zinc-500 flex flex-col gap-5">
        <Image
          src={bottleBoy}
          alt="Boy holding feeding bottle"
        />
        <span>GHs100.00</span>
    </div>
    </>
  )
}

export default Products;