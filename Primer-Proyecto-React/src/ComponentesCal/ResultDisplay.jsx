export const ResultDisplay = ({ results }) => {
  return (
    <div>
      <h3>Resultados</h3>
      <p>💰 Propina total: <strong>${results.tipAmount.toFixed(2)}</strong></p>
      <p>💵 Total con propina: <strong>${results.totalWithTip.toFixed(2)}</strong></p>
      <p>👤 Propina por persona: <strong>${results.tipPerPerson.toFixed(2)}</strong></p>
      <p>👥 Total por persona: <strong>${results.totalPerPerson.toFixed(2)}</strong></p>
    </div>
  );
};