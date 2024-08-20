import React from 'react';

const Results = ({ data }) => {
  const { amount, term, rate, type } = data;

  // Perform your calculation logic here.
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = term * 12;

  let monthlyPayment;

  if (type === 'repayment') {
    monthlyPayment =
      (amount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
  } else if (type === 'interestOnly') {
    monthlyPayment = amount * monthlyRate;
  }

  const totalRepayment = monthlyPayment * numberOfPayments;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-2 text-center">Your Results</h2>
      <p className="text-black text-lg">Your monthly repayments: <strong> €{monthlyPayment.toFixed(2)}</strong></p>
      <p className="text-black text-lg">Total you'll repay over the term: <strong> €{totalRepayment.toFixed(2)}</strong></p>
    </div>
  );
};

export default Results;
