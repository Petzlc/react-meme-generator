import { useEffect, useState } from 'react';

const imageUrl = 'https://api.memegen.link/images/aag.png';

export default function fetchImages() {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <img src={img} alt="icons" width="200" />
    </div>
  );
}

/*import { useEffect, useState } from 'react';

const imagUrl = 'https://api.memegen.link/images/aag.png';

export default function fetchImages() {
  let imageUrl = 'https://api.memegen.link/images/aag.png';
  let fetchObject = new fetch(imageUrl);
  fetchObject.then((response) => {
    response.png().then((data) => {});
  });
  const [image, setImage] = useState(null);
  return (
    <>
      fetchObject.then(response =>{' '}
      {response.png().then((data) => {
        setImage(data);
      })}
      )
      <img src={image} alt="Image" />
    </>
  );
}
  /*const [img, setImg] = useState();
  const fetchMeme = async () => {
    const res = await fetch(imagUrl);
    const imageAlien = await res.alien();
    const imageObjectUrl = URL.createObjectURL(imageAlien);
    setImg(imageObjectUrl);
  };
  useEffect(() => {
    fetchMeme();
  }, []);
  return (
    <>
      <img src={img} alt="icons" />
    </>
  );*/
