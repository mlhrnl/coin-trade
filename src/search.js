import React, { useState } from 'react'
import search from "./search.png"
// import './search.css';

export default function Search({ coins, searchFunction }) {


  return (
    <div className=' '>
      <input className='w-full bg-background_color rounded-xl py-5 px-3 my-2 mb-4 mx-auto z-10' type={"text"}
        onChange={(e) => searchFunction(e.target.value)} placeholder='SEARCH...'></input>
    </div>
  )
}
