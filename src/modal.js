import React from 'react'
export default function Modal({ nonModal, coution }) {
  return (
    <div className='z-20  fixed top-0 w-full h-full' >
      <div className=' fixed w-full h-full top-0 bg-modal'>
      </div>
      <div className='bg-white rounded-3xl p-4  fixed top-1/4 right-2/4 translate-x-2/4 translate-y-2/4 z-40 flex flex-col p-10'>
        <h1 className='text-2xl font-bold mb-6' >{coution}</h1>
        <button className='text-2xl font-bold bg-black rounded-xl p-4' onClick={(e) => nonModal(false) }>OK!</button>
      </div>
    </div>
  )
}
