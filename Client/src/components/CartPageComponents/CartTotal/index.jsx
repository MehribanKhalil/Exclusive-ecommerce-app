import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../CommonComponents/button'

const CartTotal = () => {
    const nav=useNavigate()

  return (
    <div>
        <div className='actions flex justify-between'>
            <button onClick={()=>nav('/')} className='custom_border px-10 py-3'>Return To Shop</button>
            <button onClick={()=>nav('/')} className='custom_border  px-10 py-3'>Update Cart</button>
        </div>

        <div className='flex justify-between flex-col items-center lg:items-start lg:flex-row  pt-16 '>
            <div className='cart-coupon flex items-center  gap-3 mb-5 lg:mb-0'>
                <input type="text" placeholder='Coupon Code  ' className='custom_border py-3 px-3 focus:outline-none' />
                <Button btnText='Apply Coupon' />
            </div>

            <div className='cart-total border-2 border_radius border-slate-700 p-6 w-[300px] sm:w-[500px]'>
                <h3 className=' text-[1.25rem] font-medium'>Cart Total</h3>
                <div className='flex items-center justify-between py-3 section_border'>
                    <p>Subtotal:</p>
                    <span>$1750</span>
                </div>
                
                <div className='flex items-center justify-between py-3 section_border'>
                    <p>Shipping:</p>
                    <span>Free</span>
                </div>
                <div className='flex items-center justify-between py-3 '>
                    <p>Total:</p>
                    <span>$1750</span>
                </div>

                
                <div className='center py-3'>
                <Button btnText='Procees to checkout' />

                </div>
            </div>
        </div>
    </div>
  )
}

export default CartTotal