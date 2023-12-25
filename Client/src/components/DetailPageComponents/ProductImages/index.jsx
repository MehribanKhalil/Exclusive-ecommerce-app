import React from 'react'
import mainImg from '../../../assets/images/DetailPageImages/image 63.png'
import detailedImg1 from '../../../assets/images/DetailPageImages/image 61.png'
import detailedImg2 from '../../../assets/images/DetailPageImages/image 59.png'
import detailedImg3 from '../../../assets/images/DetailPageImages/image 58.png'
import detailedImg4 from '../../../assets/images/DetailPageImages/image 57.png'


const ProductImages = () => {
  return (
    <div className='flex flex-col gap-4 md:grid grid-cols-12 '>
    <div className=" flex-row flex md:flex-col gap-9 col-span-3">
        <div className=' bg-slate-200 w-full overflow-hidden  h-full cursor-pointer object-cover center'>
            <img src={detailedImg1} alt="product image" className='hover:scale-110 custom_transition' />
        </div>
        <div className=' bg-slate-200 w-full  overflow-hidden h-full cursor-pointer object-cover center'>
            <img src={detailedImg2} alt="product image" className='hover:scale-110 custom_transition' />
        </div>
        <div className=' bg-slate-200 w-full overflow-hidden h-full cursor-pointer object-cover center'>
            <img src={detailedImg3} alt="product image" className='hover:scale-110 custom_transition' />
        </div>
        <div className=' bg-slate-200 w-full overflow-hidden h-full cursor-pointer object-cover center'>
            <img src={detailedImg4} alt="product image" className='hover:scale-110 custom_transition' />
        </div>
    </div>
    <div className="main-img bg-slate-200 center col-span-9 w-full h-full overflow-hidden cursor-pointer">
        <img src={mainImg} alt="product image" className='hover:scale-110 custom_transition' />
    </div>
</div>
  )
}

export default ProductImages