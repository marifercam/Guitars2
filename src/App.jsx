import { useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import Footer from "./components/footer";
import { db } from "./data/guitarras";

function App() {
  const [guitars] = useState(db);
  const [cart, setCart] = useState([]);

  const addGuitar = (guitar) => {
    const itemExists = cart.findIndex((item) => item.id === guitar.id);

    if (itemExists === -1) {
      setCart([...cart, { ...guitar, cantidad: 1 }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemExists].cantidad++;
      setCart(updatedCart);
    }
  };

  return (
    <>
      <Header cart={cart} />

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