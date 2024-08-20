
import Form from './component/form';
import Results from './component/results';
import { useState } from 'react';
const App = () => {
  const [formData, setFormData] = useState(null);

  const handleCalculate = (data) => {
    setFormData(data);
  };

  return (
    <div className="h-screen flex bg-fuchsia-300">
      <div className="w-1/2 bg-slate-50 flex justify-center items-center">
        <Form onCalculate={handleCalculate} />
      </div>
      <div className="w-1/2 bg-red-500 rounded-l-2xl flex justify-center items-center">
        {formData && <Results data={formData} />}
      </div>
    </div>
  );
};


export default App;
