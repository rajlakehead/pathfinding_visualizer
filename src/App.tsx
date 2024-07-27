import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { PathfindingProvider } from "./context/PathfindingContext";
import { TileProvider } from "./context/TIleContext";
import { SpeedProvider } from "./context/SpeedContext";
import { Grid } from "./components/Grid";

function App() {
  const isVisualizationRunningRef = useRef(false);
  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
        <div className="h-screen w-screen flex flex-col">
          <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
        </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App;
