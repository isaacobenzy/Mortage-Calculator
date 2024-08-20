// import React, { useState } from 'react';
import { useState } from 'react';

import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [rate, setRate] = useState('');
  const [type, setType] = useState('repayment');
  const [monthlyRepayment, setMonthlyRepayment] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);

  const calculateRepayments = (e) => {
    e.preventDefault();

    const principal = parseFloat(amount);
    const interest = parseFloat(rate) / 100 / 12;
    const payments = parseFloat(term) * 12;

    let monthlyPayment;

    if (type === 'repayment') {
      // Calculate repayment mortgage
      monthlyPayment = 
        (principal * interest) / 
        (1 - Math.pow(1 + interest, -payments));
    } else {
      // Calculate interest-only mortgage
      monthlyPayment = principal * interest;
    }

    const totalPayment = monthlyPayment * payments;

    setMonthlyRepayment(monthlyPayment.toFixed(2));
    setTotalRepayment(totalPayment.toFixed(2));
  };

  const clearForm = () => {
    setAmount('');
    setTerm('');
    setRate('');
    setType('repayment');
    setMonthlyRepayment(null);
    setTotalRepayment(null);
  };

  return (
  <div className='container m-4 p-4 flex-row-reverse'>
      <div className="container mx-auto p-4 bg-cyan-50">
      
      <h1 className="text-3xl font-bold text-center mb-4">Mortgage Calculator</h1>
      <form className="mb-4 bg-white p-6 rounded-lg shadow-md" onSubmit={calculateRepayments}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Mortgage Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="term">
            Mortgage Term (years)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="term"
            type="number"
            placeholder="Enter term"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rate">
            Interest Rate (%)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            id="rate"
            type="number"
            step="0.01"
            placeholder="Enter interest rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Mortgage Type
          </span>
          <div className="flex items-center">
            <input
              id="repayment"
              type="radio"
              value="repayment"
              checked={type === 'repayment'}
              onChange={(e) => setType(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="repayment" className="mr-4">Repayment</label>

            <input
              id="interestOnly"
              type="radio"
              value="interestOnly"
              checked={type === 'interestOnly'}
              onChange={(e) => setType(e.target.value)}
              className="mr-2"
            />
            <label htmlFor="interestOnly">Interest Only</label>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Calculate Repayments
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={clearForm}
          >
            Clear All
          </button>
        </div>
      </form>
      <div className='container mx-auto p-4 bg-green-800'>
      {monthlyRepayment !== null && (
        <div className="results bg-white p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-2xl font-bold mb-2">Your Results</h2>
          <p>Your monthly repayments: <strong>${monthlyRepayment}</strong></p>
          <p>Total you ll repay over the term: <strong>${totalRepayment}</strong></p>
        </div>
      )}
      </div>
     
    </div>
  </div>
  );
}

export default App;


