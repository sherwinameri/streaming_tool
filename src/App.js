import { useState } from "react";
import SearchBox from "./components/SearchBox";
import ResponseContainer from "./components/ResponseContainer";

function App() {
  const [mediaInput, setMediaInput] = useState('');
  const [apiResponse, setApiResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showMore, setShowMore] = useState('hidden');
  const [showButton, setShowButton] = useState(true);

  return (
    <main>
      <h1>Welcome to StreamFinder!</h1>
      <SearchBox
        mediaInput={mediaInput}
        setMediaInput={setMediaInput}
        setApiResponse={setApiResponse}
        setIsLoading={setIsLoading}
        setShowMore={setShowMore}
        setShowButton={setShowButton}
      ></SearchBox>

      <ResponseContainer
        apiResponse={apiResponse}
        isLoading={isLoading}
        showMore={showMore}
        setShowMore={setShowMore}
        showButton={showButton}
        setShowButton={setShowButton}
      />
    </main>
  );
}

export default App;
