import React from 'react'

function Card({title,text,image_url}) {
  return (
    <div className='border-2 border-gray-500 bg-gray-600 border-opacity-60 w-64 md:w-72 h-[22rem] rounded-md text-center shadow-xl shadow-black'>
      <img src={image_url} alt="Card_image" className='w-72 rounded-md h-48' />
      <h1 className='text-3xl text-center font-mono'>{title}</h1>
      <h3 className='opacity-85 p-2 text-base'>{text}</h3>
    </div>
  )
}

export default Card