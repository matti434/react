import React from "react";
import { useState } from "react";
import { PeopleCounter } from "./PeopleCounter";
import { TipPercentage } from "./TipPercentage";

export const TipCalculator = () => {
  const [bill, setBill] = useState({});
  const [tipPercentaje, setTipPercentaje] = useState({});
  const [peopleCounter, setPeopleCounter] = useState(0);

  const calculateResults = () => {
    
    if(bill <=0 || peopleCounter <=0){
      return{
        tipAmount: 0,
        totalWithTip: 0,
        tipPerPerson: 0,
        totalPerPerson: 0
      };
    };
    
    const tipAmount = bill * (tipPercentaje / 100);
    const totalWithTip = bill + tipAmount;
    const TipPerPerson = tipAmount / peopleCounter;
    const totalPerPerson = totalWithTip / peopleCounter;

    return {
      tipAmount,
      totalWithTip,
      TipPerPerson,
      totalPerPerson,
    };
  };
 
  const results = calculateResults();
  return (
    <div>
      <BillInput value={bill} onChange={setBill} />
      <TipPercentage value={tipPercentaje} onChange={setTipPercentaje} />
      <PeopleCounter value={peopleCounter} onChange={setPeopleCounter} />

      <ResultDisplay value={results} />
    </div>
  );
};
