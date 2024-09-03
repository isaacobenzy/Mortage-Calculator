import React from 'react';

const Results = ({ data }) => {
  if (!data) {
    return (
      <div className="rounded-lg p-6 shadow-md w-full max-w-md text-white text-center">
      <h2 className="text-2xl font-bold mb-2 text-center">Your Results</h2>
      <p>Your results will be shown here</p>
     <p>Please fill out the form to see your results</p>
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
    <div className="rounded-lg p-6 shadow-md w-full max-w-md text-white text-center">
      <h2 className="text-2xl font-bold mb-2 text-center">Your Results</h2>
      <p>Your results will be shown here</p>
      <p>And if you want to make any changes you can edit it and click on Calculate</p>
      <div className="border-t-4 border-lime-500 rounded-lg p-6 bg-slate-900 mt-4">
        <div className="text-4xl mb-4 text-lime-500 ">
         <p className="text-lg mb-4 text-white" >Your monthly repayments </p> <strong>£{monthlyPayment.toFixed(2)}</strong>
        </div>
        <hr className="border-t-2 border-white-400 my-4" />
        <p className="text-lg">
          Total you'll repay over the terms <br /> <strong>£{totalRepayment.toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
};

export default Results;
