import { useState } from "react";
import SearchBox from "./components/SearchBox";
import ResponseContainer from "./components/ResponseContainer";

function App() {
  const [mediaInput, setMediaInput] = useState('');
  const [apiResponse, setApiResponse] = useState([]);

  return (
    <main>
      <h1>Hello, World!</h1>
      <SearchBox
        mediaInput={mediaInput}
        setMediaInput={setMediaInput}
        setApiResponse={setApiResponse}
      ></SearchBox>

      <ResponseContainer
        apiResponse={apiResponse}
      />
    </main>
  );
}

export default App;
