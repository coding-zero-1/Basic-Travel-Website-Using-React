import React,{useState} from 'react'

function Contact() {
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const [text,setText]=useState("")
  return (
    <div className='bg-gray-800 text-white h-5/6 flex items-center justify-center border-y-2'>
      <div className='border border-white w-80 flex flex-col gap-4 p-2 rounded-md bg-white bg-opacity-10 items-center justify-center'>
        <h1 className='text-xl underline'>Contact Us</h1>
        <form className='flex flex-col gap-4'>
          <label htmlFor="Name" className='text-lg block'>
            Name:{" "}
            <input type="text" id='Name' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} className='bg-transparent outline-none border rounded p-1 text-base' />
          </label>

          <label htmlFor="phone" className='text-lg block'>
            Contact No.:{" "}
            <input type="phone-number" id='phone' placeholder='Enter your contact no.' value={phone} onChange={(e)=>setPhone(e.target.value)} className='bg-transparent outline-none border rounded p-1 text-base' />
          </label>

          <label htmlFor="Email" className='text-lg block'>
            Email:{" "}
            <input type="email" id='Email' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} className='bg-transparent outline-none border rounded p-1 text-base' />
          </label>
        </form>
        <textarea name="feedback" id="feedback" value={text} onChange={(e)=>setText(e.target.value)} className='text-black w-72 p-1 rounded' placeholder='Kindly enter your feedback!'></textarea>
      </div>
    </div>
  )
}

export default Contact