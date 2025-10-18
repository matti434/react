import React from 'react'
import { useState } from 'react'

const [bill,setBill]=useState({})
const [TipPercentaje,setTipPercentaje]=useState({})
export const TipCalculator = () => {
  return (
    <div>
        <BillInput value={bill} onChange={setBill} />
        <TipPercentaje value={TipPercentaje} onChange={setTipPercentaje} />
    </div>
  )
}
