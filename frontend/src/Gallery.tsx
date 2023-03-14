import { FormEvent, useRef, useState } from "react";

export const Gallery = () => {
  const [imgUrl, setImgUrl] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://api.thecatapi.com/v1/images/search?&api_key=${api_key}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    const parsedDataURL = parsedData[0].url;
    setImgUrl(parsedDataURL);
  };

  const handleLike = () => {
    const img = image.current! as HTMLImageElement;
    console.log(img.src);
  };
  const image = useRef(null);

  return (
    <div>
      <h1>Get a random cat picture</h1>
      <form onSubmit={handleSubmit} action="" method="get">
        <p>
          <button type="submit">Cat me</button>
        </p>
        <p>
          <img src={imgUrl} alt="" ref={image} />
        </p>
      </form>
      <button onClick={handleLike}>Like</button>
    </div>
  );
};
