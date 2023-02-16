import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="h-screen flex ml-12 mr-12">
      <div className="bg-state-100 w-64 h-full p-5">
        <Dropdown />
      </div>
      <div className="flex-1 p-5"></div>
    </div>
  );
}
export default App;
