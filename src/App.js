import { useState } from "react";
import SearchBox from "./components/SearchBox";
import ResponseContainer from "./components/ResponseContainer";

function App() {
  const [mediaInput, setMediaInput] = useState('');
  const [apiResponse, setApiResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main>
      <h1>Hello, World!</h1>
      <SearchBox
        mediaInput={mediaInput}
        setMediaInput={setMediaInput}
        setApiResponse={setApiResponse}
        setIsLoading={setIsLoading}
      ></SearchBox>

      <ResponseContainer
        apiResponse={apiResponse}
        isLoading={isLoading}
      />
    </main>
  );
}

export default App;
