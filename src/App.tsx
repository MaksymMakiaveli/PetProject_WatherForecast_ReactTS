import React from 'react';
import { NightClear } from '@IconComponent';

function App() {
  const [count, setCount] = React.useState(0);

  const handlerCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h2>React Typescript Boilerplate</h2>
      <p>count:{count}</p>
      <button onClick={handlerCount}>Increment</button>
      <NightClear />
    </div>
  );
}

export default App;
