import React from 'react'
import Button from '../Button/Button'
import freshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className='bg-zinc-100 bg-right bg-contain bg-no-repeat' style={{backgroundImage: `url(${freshFruits})`}}>
        <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10'>
            <span className='md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>50%</span>
            <div className='max-w-[700px]'>
                <h3 className='md:text-7xl md:mt-0 mt-4 text-5xl text-zinc-800 font-bold '>
                    First Order Discount!
                </h3>
                <p className='text-zinc-600 md:font-medium my-6'>
                    Enjoy an Exclusive first order discount on Our Grocery Website ! Shop fresh essentials and save big on your first order, Fast Delivery and quality guarenteed.
                </p>
                <Button content="Get A Discount"/>
            </div>
        </div>
    </section>
  )
}

export default Discount