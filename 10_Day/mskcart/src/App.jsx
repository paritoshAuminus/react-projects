import React from 'react';
import useCounter from './hooks/useCounter';

function App() {
  const { count, increment, decrement, reset } = useCounter(0, 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Custom Hook: useCounter</h1>
      <h2>Value: {count}</h2>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔁 Reset</button>
    </div>
  );
}

export default App;
