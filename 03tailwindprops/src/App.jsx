import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="bg-green-400 mb-4 text-black p-4 rounded-md">
        Tailwind Test
      </h1>
      <Card username="Devanshsk" btnText="Visit me" />
      <Card username="Chaiorcode" />
    </>
  );
}

export default App;
