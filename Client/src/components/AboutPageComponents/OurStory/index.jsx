import React from 'react'
import ourStoryImg from '../../../assets/images/AboutPageImages/OurStory/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png'

const OurStory = () => {
  return (
    <section id='our-story' className='grid grid-cols-1 place-items-center lg:grid-cols-2 gap-10 lg:gap-32 items-center pt-16 pb-24'>
        <div className='space-y-8 text-justify sm:text-left px-5 sm:px-10  xl:pl-40 '>
            <h2 className=' font-semibold mb-5'>Our Story</h2>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div>
            <img src={ourStoryImg} alt='Our story' className='border_radius ' />
        </div>
    </section>
  )
}

export default OurStory