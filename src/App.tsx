import CanvasSection from "./components/canvas";
import Sidebar from "./components/sidebar";
import "./index.css";

function App() {
  return (
    <div
      id="app"
      className="flex h-screen w-screen bg-slate-300 overflow-hidden overscroll-none"
    >
      <Sidebar />
      <CanvasSection />
    </div>
  );
}

export default App;
