// import './App.css';
import React, { useState, useEffect } from 'react'
import Coins from './coins'
import Search from './search'
import Wallet from './wallet'
import axios from 'axios';
import Modal from './modal';
import coinBackground from "./coin-background.jpg"

function App() {

  const [coins, setCoins] = useState([]);
  const [buyPrice, setBuyPrice] = useState(0);
  const [money, setMoney] = useState(1000)
  const [findCoin, setFindCoin] = useState([])
  const [coin_amount, setCoin_amount] = useState([])
  const [modal, setModal] = useState(true)
  const [warn, setWarn] = useState("")
  const [word, setWord] = useState("")
  const [myCoins, setMyCoins] = useState([])

  const coinAmounts = (amount, index) => {
    setCoin_amount(amount)
  }

  function isModal(current) {
    setModal(current => !current)
  }

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then(res => setCoins(res.data));
  }, [])

  const buy = (coin_price, coin_name, coin_image, coin_amount) => {
    if (money - coin_price <= 0) {
      isModal();
      setWarn("YETERSİZ BAKİYE!!")
      return
    }
    if (coin_amount > 0) {
      const checkWallet = myCoins.find(item => item.coin_name === coin_name)
      if (checkWallet) {
        checkWallet.coin_price += coin_price
        checkWallet.coin_amount += coin_amount
        setMyCoins([...myCoins.filter(item => item.coin_name !== coin_name), checkWallet])
      }
      else {
        setMyCoins([...myCoins, { coin_name, coin_price, coin_image, coin_amount }]);
      }
    }
    setBuyPrice(coin_price)
    setMoney(money - coin_price)
  }

  const sold = (coin_price, coin_name, coin_image, coin_amount) => {
    const checkWallet = myCoins.find(item => item.coin_name === coin_name)
    if (checkWallet) {
      if (checkWallet.coin_amount < coin_amount) {
        isModal();
        setWarn("YETERSİZ ADET!!")
        return;
      }
      checkWallet.coin_amount -= coin_amount
      checkWallet.coin_price -= coin_price

      setMyCoins([...myCoins.filter(item => item.coin_name !== coin_name), checkWallet])
      setMoney(money + coin_price)
    }
    else {
      return
    }
    if (checkWallet.coin_amount === 0) {
      setMyCoins([...myCoins.filter(item => item.coin_amount !== 0)])
    }
  }
  
  const search = (letter) => {
    setWord(letter)
    setFindCoin([...coins.filter(item => item.name.toLowerCase().includes(letter.toLowerCase()))])
  }

  return (
    <div>
      <img src={coinBackground} className='fixed z-0 w-full' alt=''/>
      <div className='flex justify-center items-center h-24 w-full '>
      <h1 className='w-fit text-4xl font-bold z-10   text-white'>X-COİN</h1>
    </div>
      <div className="w-full z-10">
        <div className='flex z-10 mx-32 '>
          <div className='z-10 w-8/12'>
        <Search coins={coins} searchFunction={search} />  
          <div className='grid grid-cols-2 gap-[24px]'>
            {word === "" ? (coins.map((item, index) => (
              <Coins name={item.name} price={item.current_price} image={item.image} buy={buy} sold={sold} coinAmount={coinAmounts} />
            ))) : (findCoin.map((item, index) => (
              <Coins name={item.name} price={parseInt(item.current_price)} image={item.image} buy={buy} sold={sold} coinAmount={coinAmounts}  />
            )))}
          </div>
          </div>
          <Wallet buy_price={money} coins={myCoins} />
        </div>
      </div>
      {modal === false ? (<Modal nonModal={isModal} coution={warn} />) : ("")}
    </div>
  );
}
export default App;
