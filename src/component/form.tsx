import React, { useState } from 'react';

const Form = ({ onCalculate }) => {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [rate, setRate] = useState('');
  const [type, setType] = useState('repayment');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({ amount, term, rate, type });
  };

  const clearForm = () => {
    setAmount('');
    setTerm('');
    setRate('');
    setType('repayment');
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center mb-4">
        <label className='text-gray-700 text-sm font-bold'>
          Mortgage Calculator
        </label>
        <button
          className="text-gray-400 underline font-bold"
          type="button"
          onClick={clearForm}
        >
          Clear All
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
          Mortgage Amount
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-2"
          id="amount"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-between items-center mb-4">
      <div className="mb-4 mr-1">
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
      <div className="mb-4 ml-2">
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
      </div>
      <div className="mb-4">
  <span className="block text-gray-700 text-sm font-bold mb-2">
    Mortgage Type
  </span>
 
    <div className="border border-gray-300 rounded p-2 mr-2 flex items-center mb-2 hover:bg-yellow-100">
      <input
        id="repayment"
        type="radio"
        value="repayment"
        checked={type === 'repayment'}
        onChange={(e) => setType(e.target.value)}
        className="mr-2"
      />
      <label htmlFor="repayment">Repayment</label>
    </div>

    <div className="border border-gray-300 rounded p-2 mr-2 flex items-center hover:bg-yellow-100">
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
      </div>
    </form>
  );
};

export default Form;
