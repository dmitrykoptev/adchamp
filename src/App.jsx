import React, { useState } from "react";
import Header from "./components/Header/Header";
import Carousel from "./components/Сarusel/Carousel";
import Gallery from "./components/Gallery/Gallery";
import Title from "./components/Title/Title";
import Sizes from "./components/Sizes/Sizes";
import CTA from "./components/СTA/Cta";

function App() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart] = useState([]);

  const addItemToCart = (newItem) => {
    setCart((prev) => [...prev, newItem]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleMySize = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
      <Header cart={cart} checkout={clearCart} />
      <main className="container">
        <div className="grid">
          <div className="carousel">
            <Carousel />
          </div>
          <div className="gallery">
            <Gallery />
          </div>
          <div className="title">
            <Title />
          </div>
          <div className="sizes">
            <Sizes selectSize={handleMySize} />
          </div>
          <div className="cta">
            <CTA
              selectedSize={selectedSize}
              clearSize={() => setSelectedSize(null)}
              addItem={addItemToCart}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
