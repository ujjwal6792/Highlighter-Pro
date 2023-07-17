import CanvasSection from "src/components/canvas";
import Sidebar from "src/components/sidebar";
import "src/index.css";

function App() {
  return (
    <div
      id="app"
      className="flex h-screen w-screen bg-gray-900 overflow-hidden overscroll-none"
    >
      <Sidebar />
      <CanvasSection />
    </div>
  );
}

export default App;
