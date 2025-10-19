import React from 'react'
import { useState } from 'react'
import { PeopleCounter } from './PeopleCounter'
import { TipPercentage } from './TipPercentage'

const [bill,setBill]=useState({})
const [tipPercentaje,setTipPercentaje]=useState({})
const [peopleCounter, setPeopleCounter]= useState(0);


 const result = () => {
   const tipAmount = billAmount * (tipPercentaje/100);
   const TipPerPerson = tipAmount / peopleCounter;
 }
export const TipCalculator = () => {
  return (
    <div>
        <BillInput value={bill} onChange={setBill} />
        <TipPercentaje value={tipPercentaje} onChange={setTipPercentaje} />
        <PeopleCounter value={peopleCounter} onChange={setPeopleCounter}/>
        
    </div>
  )
}
