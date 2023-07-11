import React from 'react'
import MyCoin from './myCoin';

export default function Wallet({ buy_price, coins }) {
  return (
    <div className='flex flex-col items-center bg-background_color rounded-3xl p-4 shadow-2xl w-1/4 h-5/6 fixed overflow-auto right-36  m-2'>
      <span className='text-2xl font-bold text-white mb-7'>WALLET</span>
      <span className='text-6xl font-bold text-white mb-7'>{buy_price.toFixed(3)} $</span>
      <span className='text-xl font-bold text-white mb-7'>Balance</span>
      <hr className='w-full text-white'/>
      <MyCoin coins={coins}></MyCoin>
    </div>
  )
}
