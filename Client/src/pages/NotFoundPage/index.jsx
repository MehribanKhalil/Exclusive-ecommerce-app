import React from 'react'
import Button from '../../components/CommonComponents/button'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const nav =useNavigate()
 const  handleClick=()=>{
    nav('/')
  }
  return (
    <section id='Not-found' className='text-center space-y-10 h-[70vh]  flex-col center'>
      <h1 className=' text-[6.875rem]  font-medium tracking-wide'>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Button btnText='Back to home page' onclick={handleClick} />
    </section>
  )
}

export default NotFoundPage
