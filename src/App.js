import { useState } from "react";
import SearchBox from "./components/SearchBox";

function App() {
  const [mediaInput, setMediaInput] = useState('');
  // setMediaInput('test');

  return (
    <main>
      <h1>Hello, World!</h1>
      <SearchBox mediaInput={mediaInput} setMediaInput={setMediaInput}></SearchBox>
      {/* <SearchBox /> */}
    </main>
  );
}

export default App;


// TODO: Create handleFormSubmit event listener, that sents request to API for data. Input is working.


// https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability/details