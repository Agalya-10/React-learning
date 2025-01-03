import React, { useState, useEffect } from 'react';

function Useeffect() {
  const [count, setCount] = useState(0); 
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); 

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Useeffect;
