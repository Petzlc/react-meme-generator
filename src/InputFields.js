import { useState } from 'react';

export default function InputFields() {
  // 1. create state for the component
  const [textTop, setTextTop] = useState('');
  const [textBottom, setTextBottom] = useState('');
  return (
    <>
      {/* 2. Display current state */}
      <h1>{textTop}</h1>
      <input
        placeholder="top box" // delete placeholder before running the app
        value={textTop}
        onChange={(event) => {
          setTextTop(event.currentTarget.value);
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>{textBottom}</h1>
      <input
        placeholder="bottom box"
        value={textBottom}
        onChange={(event) => {
          setTextBottom(event.currentTarget.value);
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <iframe
        src="https://api.memegen.link/images/aag.png"
        width="400"
        height="400"
        title="Alien"
        sandbox="allow-popups"
      />
    </>
  );
}
