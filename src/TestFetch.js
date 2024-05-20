import axios from 'axios';
import { useState } from 'react';

export default function TestFetch() {
  const [images, setImages] = useState([]);
  const fetchAPI = async () => {
    const response = await axios.get('https://memegen.link/examples/');
    console.log(response.data);
    const data = await response.data;
    setImages(data);
  };
  return (
    <div className="container">
      <br />
      <button className="btn btn-primary btn-md" onClick={fetchAPI}>
        Fetch API
      </button>
    </div>
  );
}
