import React from 'react'
import Card from './Card'

function Home() {
  return (
    <div className='box-border bg-gray-800 w-full flex flex-col gap-6 border-y-2'>
      <h1 className='text-white text-[1.5rem] md:text-[2.5rem] drop-shadow-2xl text-center mt-4 font-mono'>Join the ADVENTURE <span className='underline text-yellow-300'>without</span> BREAKING your BUDGET!</h1>
      <div className='flex justify-center items-center'>
      <img src="src/images/ocean_main_image.jpg" alt="ocean_image" className='w-11/12 lg:w-10/12 xl:h-[42.5rem] border-2 rounded-3xl shadow-3xl'/>
      </div>
      <div className='flex flex-col items-center text-white'>
        <h2 className='md:text-2xl text-lg underline'>OUR OFFERINGS</h2>
        <div className='flex xl:justify-between gap-12 items-center w-full mb-10 p-5 flex-col sm:grid sm:grid-cols-2 sm:items-center sm:justify-items-center xl:flex xl:flex-row'>
        <Card image_url={"src/images/card_1_image.jpg"} text={"Discover a tropical paradise with pristine beaches, lush rainforests, and vibrant culture."} title={"BALI"}/>
        <Card image_url={"src/images/card_2_image.jpg"} text={"Explore ancient ruins, whitewashed villages, and crystal-clear waters in this Mediterranean gem."} title={"GREECE"}/>
        <Card image_url={"src/images/card_3_image.jpg"} text={"Experience the energy of Copacabana Beach, the iconic Christ the Redeemer statue, and the lively samba scene."} title={"RIO DE JANARIO"}/>
        <Card image_url={"src/images/card_4_image.jpg"} text={"Relax on powdery white sand, indulge in delicious seafood,and explore the stunning coral reefs."} title={"PHUKET"}/>
        </div>
      </div>
    </div>
  )
}

export default Home