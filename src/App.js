import logo from "./maintenance-panel800600.gif";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-[30rem]">
        <img src={logo} alt="" />
      </div>
      <div className="h-[10rem] text-center">
        <h1 className="text-3xl font-bold text-[#093f85]">We are Under Maintenance.</h1>
        <p className="font-medium text-[#093f85]">Will be Back Soon!</p>
      </div>
    </div>
  );
}

export default App;
