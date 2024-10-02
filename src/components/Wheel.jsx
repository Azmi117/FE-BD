import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const data = [
  { option: '0' },
  { option: '1' },
  { option: '2' },
]

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [message, setMessage] = useState(''); // state untuk pesan hadiah

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setMessage(''); // reset pesan saat spin dimulai
    }
  }

  return (
    <>
      <div>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
            setMessage(`Selamat kamu mendapat hadiah nomor ${data[prizeNumber].option}!`);
          }}
        />
        <div className='flex justify-center'>
          <p style={{ minHeight: '24px' }}> {/* Atur tinggi tetap agar tidak ada pergeseran */}
            {message}
          </p>
        </div>
      </div>
      <div className='flex items-center'>
        <button onClick={handleSpinClick} className='ms-2 bg-red-500 h-10 px-3 rounded-md text-white'>SPIN</button>
      </div>
    </>
  )
}
