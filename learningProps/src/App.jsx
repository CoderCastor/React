import Card from "./Card";

function App() {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <Card text={"Download Now"} color={"bg-red-600"} />
        <Card text={"Know More"} color={"bg-blue-600"} />
        <Card text={"About"} color={"bg-orange-600"} />
      </div>
    </>
  );
}

export default App;
