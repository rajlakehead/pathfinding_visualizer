import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { PathfindingProvider } from "./context/PathfindingContext";
import { TileProvider } from "./context/TIleContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <PathfindingProvider>
      <TileProvider>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App;
