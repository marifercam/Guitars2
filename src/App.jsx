import { useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { db } from "./data/guitarras";

function App() {
const [guitars] = useState(db);
const [cart, setCart] = useState([]);

  // Agregar guitarra
const addGuitar = (guitar) => {
    const itemExists = cart.findIndex((item) => item.id === guitar.id);

    if (itemExists === -1) {
    setCart([...cart, { ...guitar, cantidad: 1 }]);
    } else {
    const updatedCart = cart.map((item) =>
        item.id === guitar.id ? { ...item, cantidad: item.cantidad + 1 } : item,
    );
    setCart(updatedCart);
    }
};

  // Eliminar guitarra
const removeGuitar = (id) => {
    setCart(cart.filter((item) => item.id !== id));
};

  // Aumentar cantidad
const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item,
    );
    setCart(updatedCart);
  };

  // Disminuir cantidad
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.cantidad > 1
        ? { ...item, cantidad: item.cantidad - 1 }
        : item,
    );
    setCart(updatedCart);
  };

  return (
    <>
      <Header
        cart={cart}
        addGuitar={addGuitar}
        removeGuitar={removeGuitar}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {guitars.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addGuitar={addGuitar} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;