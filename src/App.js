import "./App.css";
import BestSelling from "./components/BestSelling/BestSelling";
import Header from "./components/Header/Header";
import SignedCollection from "./components/SignedCollection/SignedCollection";

function App() {
  return (
    <div>
      <Header></Header>
      <BestSelling></BestSelling>
      <SignedCollection></SignedCollection>
    </div>
  );
}

export default App;
