import { useState } from 'react';

export default function InputFields() {
  // 1. create state for the component
  const [textTop, setTextTop] = useState('');
  const [textBottom, setTextBottom] = useState('');
  return (
    <>
      {/* 2. Display current state */}
      {/* <h1>{textTop}</h1> What do i need this for?*/}
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
      {/* <h1>{textBottom}</h1> What do i need this for?*/}
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
      <input
        placeholder="Meme name"
        value={textBottom}
        onChange={(event) => {
          setTextBottom(event.currentTarget.value);
        }}
      />
      {/* iframe does not work properly die to a weird display where img are displayed above each other with lots of space underneath, making the website huge. Couldn't fix that. */}
      {/* <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
        <iframe
          title="aag"
          src="https://api.memegen.link/images/aag.png"
          sandbox=""
          style={{
            width: '50',
            height: '50',
            border: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
          }}
        />
        <iframe
          src="https://api.memegen.link/images/atis.png"
          title="123"
          sandbox=""
          style={{
            width: '50',
            height: '50',
            border: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
          }}
        />
      </div> */}
    </>
  );
}
