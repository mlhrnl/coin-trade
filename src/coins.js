import React, {  useState } from 'react'

export default function Coins({ name, price, image, buy, sold, coinAmount}) {
  const [amount, setAmount] = useState([]);

  function changeAmount(deger) {
    setAmount(deger);
    coinAmount(amount)
  } 
    
    return (
        <div className="bg-background_color rounded-3xl p-4 shadow-2xl ">
            <div className='coin_top flex justify-between items-center mb-1 p-2'>
                <div className='flex items-center'>                
                <img src={image} className='w-12 mr-3' alt=''/>
                <p className=' text-2xl font-bold text-white'>{name}</p>
                </div>
                <div>
                <p className='coinPrice text-2xl font-bold text-white'>{price} $</p>
                </div>
            </div>
            <div className='coin_bottom'>
                <input className='bg-background_color rounded-xl text-white p-4 w-8/12' type={"number"} min={0} id="input" onChange={(e) => changeAmount(e.target.value)}></input>
                <button className='bg-background_color rounded-xl text-white p-4 ml-4 ' onClick={() => buy(price*amount, name, image, amount*1)}>BUY</button>
                <button className='bg-background_color rounded-xl text-white p-4 ml-4' onClick={() => sold(price*amount, name, image, amount*1)}>SOLD</button>
            </div>
        </div>
    )
}
