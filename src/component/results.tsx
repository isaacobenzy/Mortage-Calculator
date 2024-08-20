import React from 'react';

const Results = ({ data }) => {
  if (!data) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-2 text-center">Your Results</h2>
        <p className="text-gray-500 text-lg text-center">Please fill out the form to see your results</p>
      </div>
    );
  }

  const { amount, term, rate, type } = data;

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
    <div className="border-r-6 p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-2 text-center">Your Results</h2>
      <p className="text-black text-lg">Your monthly repayments: <strong>£{monthlyPayment.toFixed(2)}</strong></p>
      <p className="text-black text-lg">Total you'll repay over the term: <strong>£{totalRepayment.toFixed(2)}</strong></p>
    </div>
  );
};

export default Results;
