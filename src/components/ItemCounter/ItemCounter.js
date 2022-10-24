import React, { useState } from 'react';

function ClickCounter({ stock }) {
  const [clicks, setClicks] = useState(1);

  function handleClick() {
    if (clicks < stock) {
      setClicks(clicks + 1);
    }
  }

  function handeleRest() {
    if (clicks > 1) {
      setClicks(clicks - 1);
    }
  }

  return (
    <>
      <button onClick={handeleRest}>-</button>
      <button onClick={handleClick}>+</button>

      <p>Hiciste {clicks} de clicks</p>
    </>
  );
}

export default ClickCounter;
