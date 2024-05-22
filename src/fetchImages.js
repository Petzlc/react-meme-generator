import React, { useEffect, useState } from 'react';

const imageUrls = [
  'https://api.memegen.link/images/aag.png',
  'https://api.memegen.link/images/ackbar.png',
  'https://api.memegen.link/images/afraid.png',
  'https://api.memegen.link/images/agnes.png',
  'https://api.memegen.link/images/aint-got-time.png',
  'https://api.memegen.link/images/ams.png',
  'https://api.memegen.link/images/ants.png',
  'https://api.memegen.link/images/apcr.png',
  'https://api.memegen.link/images/astronaut.png',
  'https://api.memegen.link/images/atis.png',
  'https://api.memegen.link/images/away.png',
  'https://api.memegen.link/images/awesome.png',
  'https://api.memegen.link/images/awesome-awkward.png',
];

export default function FetchImages() {
  const [imgs, setImgs] = useState([]);
  const [isButtonVisible, setIsButtonVisible] = useState(true); // Togggle Button to make an image appear
  const [count, setCount] = useState(0);
  const [pick, setPick] = useState(0);
  const fetchImages = async () => {
    const imagePromises = imageUrls.map(async (url) => {
      const res = await fetch(url);
      const imageBlob = await res.blob();
      return URL.createObjectURL(imageBlob);
    });
    try {
      const imageObjectURLs = await Promise.all(imagePromises);
      setImgs(imageObjectURLs);
    } catch (error) {
      console.error('Error in fetchImages:', error);
    }
  };

  useEffect(() => {
    fetchImages().catch((error) =>
      console.error('Error in fetchTemplates:', error),
    );
  }, []);

  return (
    <div>
      {imgs.map((img, index) => (
        <img
          key={`image-${String(img)}`}
          src={img}
          alt={`icon-${index}`}
          width="50"
          height="40"
        />
      ))}
      {isButtonVisible && ( // Toggle button to make an image appear
        <div>
          {
            imgs.map(
              (
                img,
                index, // This makes the first button appear when clicking the toggle button
              ) => (
                <img
                  key={`image-${String(img)}`}
                  src={img}
                  alt={`icon-${index}`}
                  width="150"
                  height="140"
                />
              ),
            )[0]
          }
        </div>
      )}
      <button onClick={() => setIsButtonVisible(!isButtonVisible)}>
        {' '}
        {/* creates the toggle button and reverse the state to its opposite when clicked (so image appears or disappears)*/}
        Toggle Button
      </button>
      <div>
        {
          imgs.map(
            (
              img,
              index, // ((This makes the first button appear when clicking the toggle button))
            ) => (
              <img
                key={`image-${String(img)}`}
                src={img}
                alt={`icon-${index}`}
                width="150"
                height="140"
              />
            ),
          )[0]
        }
      </div>
      ,
      {/* Button for clicking through the images,connected with the setCount which doesn't work*/}
      <button onClick={() => setCount(count + 1)}>Next Template</button>
      {/* <button onClick={() => setCount(count - [1])}>Previous Template</button> */}
      <br />
      <br />
      {/* Button for a random pick of template of the array */}
      {pick && ( // Tried to create a button to click through the template-array randomly which doesn't work.
        <div>
          {imgs.map(
            (img, index) =>
              (
                <img
                  key={`image-${String(img)}`}
                  src={img}
                  alt={`icon-${index}`}
                  width="150"
                  height="140"
                />
              )[''],
          )}
        </div>
      )}
      <button
        onClick={() =>
          setPick(pick + Math.floor(Math.random() * imageUrls.length))
        }
      >
        Random Pick
      </button>
    </div>
  );
}
