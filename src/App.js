import { useState } from 'react';
import './App.css';


const gifts = [
  'Gift1',
  'Gift2',
  'Gift3'
]

function App() {

  const [gift,setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)

    setGift(gifts[index])

  }

 

  return (
    <div className="App">
      <h1>{gift || 'Chua co phan thuong'}</h1>
      <button onClick={randomGift}>Lay thuong</button>
    </div>
  );
}

export default App;
