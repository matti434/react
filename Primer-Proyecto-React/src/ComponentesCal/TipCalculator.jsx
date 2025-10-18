import React from 'react'
import { useState } from 'react'

const [bill,setBill]=useState({})

export const TipCalculator = () => {
  return (
    <div>
        <BillInput value={bill} onChange={setBill} />
    </div>
  )
}
