import { Canvas } from "./components/canvas/canvas";
import { Settings } from "./components/settings/settings";
import { Tools } from "./components/tools/tools";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Canvas />
      </div>
      <div>
        <Settings />
      </div>
      <div>
        <Tools />
      </div>
    </div>
  );
}

export default App;
