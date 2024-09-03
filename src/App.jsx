import Form from './component/form';
import Results from './component/results';
import { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleCalculate = (data) => {
    setFormData(data);
  };

  return (
    <div className="h-screen flex bg-cyan-300 justify-center items-center">
      <div className="w-full max-w-4xl flex justify-center  bg-white">
        {/* Form Section */}
        <div className="w-1/2 flex justify-center items-center ">
          <Form onCalculate={handleCalculate} />
        </div>
        {/* Results Section */}
        <div className=" flex justify-center items-center bg-slate-800 p-6 rounded-bl-[110px] shadow-md w-full max-w-md">
          <Results data={formData} />
        </div>
      </div>
    </div>
  );
};

export default App;
