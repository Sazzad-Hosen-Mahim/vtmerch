import "./App.css";
import BuyOneGetOne from "./components/BuyOneGetOne/BuyOneGetOne";
import Header from "./components/Header/Header";
import SignedCollection from "./components/SignedCollection/SignedCollection";

function App() {
  return (
    <div>
      <Header></Header>
      <BuyOneGetOne></BuyOneGetOne>
      <SignedCollection></SignedCollection>
    </div>
  );
}

export default App;
