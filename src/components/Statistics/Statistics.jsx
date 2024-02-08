import { useState } from 'react';

export default function Statistics() {
  const [good, setGood] = useState(0);

  const handleGood = () => {
    setGood(prev => prev + 1);
  };
  return (
    <div>
      Good: {good} <button onClick={handleGood}>Good</button>
    </div>
  );
}
