import "./App.css";
import BestSelling from "./components/BestSelling/BestSelling";
import CartPage from "./components/CartPage/CartPage";
import Footer from "./components/Footer/Footer";
import Future from "./components/Future/Future";
import Header from "./components/Header/Header";
import Mission from "./components/Mission/Mission";
import NewArrival from "./components/NewArrival/NewArrival";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import ShopCollection from "./components/ShopCollection/ShopCollection";
import SignedCollection from "./components/SignedCollection/SignedCollection";
import WhatWeBelieve from "./components/WhatWeBelieve/WhatWeBelieve";

function App() {
  return (
    <div>
      <Header></Header>
      <BestSelling></BestSelling>
      <SignedCollection></SignedCollection>
      <Mission></Mission>
      <ShopCollection></ShopCollection>
      <NewArrival></NewArrival>
      <Future></Future>
      <WhatWeBelieve></WhatWeBelieve>
      <CartPage></CartPage>
      <ServiceSection></ServiceSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
