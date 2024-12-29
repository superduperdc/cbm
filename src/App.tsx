import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Button
      colorScheme="blue"
      variant="outline"
      onClick={() => setCount(count + 1)}
    >
      Click
    </Button>
  );
}

export default App;
