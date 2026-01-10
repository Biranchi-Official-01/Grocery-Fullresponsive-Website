import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = ({image,title,price}) => {
  return (
    <div className='bg-zinc-100 p-5 rounded-xl'>
        <div className='flex justify-between '>
            <span className='text-3xl text-zinc-300 '>
                <FaHeart />
            </span>
            <button className='bg-gradient-to-b from-orange-400 to-orange-600 text-white text-xl px-2 rounded-lg py-2'>
                <FaPlus />
            </button>
        </div>
        <div className='w-full h-50 '>
            <img src={image} className='w-full h-full object-contain mx-auto'/>
        </div>
        <div className='text-center'>
            <h3 className='text-2xl font-semibold '>{title}</h3>
            <p className='text-2xl font-bold mt-4 mb-3'>{price}</p>
            <Button content="Shop Now"/>
        </div>
    </div>
  )
}

export default Cards