import { FormEvent, useState } from "react";

export const Gallery = () => {
  const [input, setInput] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const [imgUrl, setImgUrl] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.length) {
      return console.log("gotta write something");
      // maybe {input.length? normal button : disabled btn}
    }

    // fetch(`https://cataas.com/cat/says/${input}`)
    //   // .then((response) => response.json())
    //   .then((data) => {
    //     setImgUrl(data.url);
    //     console.log(data.url);
    //   });
    const data = await fetch(`https://cataas.com/cat/says/${input}`);
    setImgUrl(data.url);
    setInput("");
    console.log(data);
  };

  return (
    <div>
      <h1>Get a random cat picture</h1>
      <form onSubmit={handleSubmit} action="" method="get">
        <input
          type="text"
          onChange={handleInput}
          placeholder="What does the cat say?"
          minLength={1}
        />
        <p>
          <button type="submit">Cat me</button>
        </p>
        <p>
          <img src={imgUrl} alt="" />
        </p>
      </form>
    </div>
  );
};
