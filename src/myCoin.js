import React from 'react'

export default function MyCoin({ coins }) {
    return (
        <>
            {coins.map((item, index) => (   
                <div className="flex justify-between w-full items-center mt-4">
                    <div className='flex items-center'>             
                    {/* <p className='text-white text-2xl '>{item.coin_amount}</p> */}
                        <img className='w-12 mr-3' src={item.coin_image} alt=''/>
                        <p className='text-white text-xl '>{item.coin_name}</p>
                        </div>
                        <div className='flex items-center'>
                        <p className='text-white text-2xl '>{item.coin_price} $</p>                        
                        </div>                    
                </div>
            ))}
        </>
    )
}
