import React, { useState } from "react";
import BillInput from "./BillInput";
import TipPercentage from "./TipPercentage";
import PeopleCounter from "./PeopleCounter";
import ResultDisplay from "./ResultDisplay";

const TipCalculator = () => {
  const [bill, setBill] = useState(0);
  const [tipPercentaje, setTipPercentaje] = useState(10);
  const [peopleCounter, setPeopleCounter] = useState(1);

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

export default TipCalculator;