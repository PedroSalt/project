import { FormEvent, useState } from "react";

export const Form = () => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //use context
    //create statevar to save textInput value and onchange, store it there
    //fetch with that data
    //change src for that src
    //https://cataas.com/cat/says/hello
  };

  const [query, setQuery] = useState("0");
  return (
    <div>
      <h1>Get a random cat picture</h1>
      <form onSubmit={handleSubmit} action="" method="get">
        <input onChange={handleInput} type="text" name="fetcher" id="fetcher" />
        <p>
          <button type="submit">Cat me</button>
        </p>
        <p>{query}</p>
      </form>
    </div>
  );
};
