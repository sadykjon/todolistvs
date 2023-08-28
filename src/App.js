import './App.css';
import React, { useState } from 'react';
import QRCode from "react-qr-code";
import ReactStars from 'react-stars';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <div className="container mx-auto w-2/1">
      <h2 className="py-4">QR code</h2>
      <input
        type="text"
        onChange={e => setInputValue(e.target.value)}
        className="border border-gray-300 w-full h-8 p-4 font-light text-sm focus:outline-none focus:border-gray-600"
      />
      <QRCode className="mx-auto mt-20"
        value={inputValue}
        bgColor='aqua'
        fgColor='#000000'
        level='H'
        size={256} />
      <ReactStars
        count={5}
        value={rating}
        onChange={newRating => setRating(newRating)}
        size={24}
        color1="#dddddd"
        color2="#ffd700"
      />
      <p>{rating}</p>
    </div>
  );
}

export default App;
