import React, { useState } from 'react';
import Compteur from './Compteur';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <button onClick={handleClick} className="mb-20">
        +1
      </button>
      <Compteur count={count} />
    </div>
  );
}

export default App;
