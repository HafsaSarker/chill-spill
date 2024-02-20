import SideNav from "./components/SideNav";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  return (
    <div className="p-10 flex flex-row h-full w-full">
      <SideNav />

      <Timer />
    </div>
  );
}

export default App;
