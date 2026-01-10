import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-b from-orange-400 to-orange-600 text-white px-8 py-3 rounded-lg md:text-lg font-medium hover:shadow-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 active:scale-85 hover:scale-95'>
        {props.content}
    </button>
  )
}

export default Button