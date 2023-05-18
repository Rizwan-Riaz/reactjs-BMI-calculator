import { useState,useMemo } from 'react';
import './App.css';
const DEFUALT_WEIGHT = 50;
const DEFUALT_HEIGHT = 100;
export default function App() {
  const [weight, setWeight] = useState(DEFUALT_WEIGHT);
  const [height, setHeight] = useState(DEFUALT_HEIGHT);

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }
  function onWeightChange(event){
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(()=>{
    const calculateHeight = height / 100;
    return(
      weight / (calculateHeight * calculateHeight)).toFixed(1); 
  },[ height , weight ]);

  return (
    <main>
    <h1>PROJECT : BMI CALCULATOR</h1>
    <div className='input-section'>
       <p className='slider-output'> Weight:{weight}kg</p>
        <input
        className='input-slider'
        onChange={onWeightChange}
        type='range'
        step="1"
        min = "40"
        max = "200"
        />

        <p className='slider-output'>Height : {height}cm</p>
        <input
        className='input-slider'
        onChange={onHeightChange}
        type='range'
        min='120'
        max = "220"
        />
    </div>

    <div className='output-section'>
          <p>Your BMI is:</p>
          <p className='output'>{output}</p>
    </div>
    </main>
  );
}
