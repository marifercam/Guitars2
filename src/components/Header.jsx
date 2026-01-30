import { useMemo } from "react";

export default function Header({
  cart,
  addGuitar,
  removeGuitar,
  increaseQuantity,
  decreaseQuantity,
}) {
  // Guitarra del HERO
  const heroGuitar = {
    id: 1,
    nombre: "Modelo VAI",
    precio: 399,
    imagen: "guitarra_01",
  };

  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }, [cart]);

  return (
    <>
      <header className="py-5 header">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              <a href="./index.html">
                <img
                  className="img-fluid"
                  src="/img/logo.svg"
                  alt="imagen logo"
                />
              </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div className="carrito">
                <img
                  className="img-fluid"
                  src="./img/carrito.png"
                  alt="imagen carrito"
                />

                <div id="carrito" className="bg-white p-3">
                  {cart.length === 0 ? (
                    <p className="text-center">El carrito está vacío</p>
                  ) : (
                    <>
                      <table className="w-100 table">
                        <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th></th>
                          </tr>
                        </thead>

                        <tbody>
                          {cart.map((item) => (
                            <tr key={item.id}>
                              <td>
                                <img
                                  className="img-fluid"
                                  src={`/img/${item.imagen}.jpg`}
                                  alt="guitarra"
                                />
                              </td>

                              <td>{item.nombre}</td>

                              <td className="fw-bold">${item.precio}</td>

                              <td className="d-flex gap-2 align-items-center">
                                <button
                                  className="btn btn-dark"
                                  onClick={() => decreaseQuantity(item.id)}
                                >
                                  -
                                </button>

                                {item.cantidad}

                                <button
                                  className="btn btn-dark"
                                  onClick={() => increaseQuantity(item.id)}
                                >
                                  +
                                </button>
                              </td>

                              <td>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => removeGuitar(item.id)}
                                >
                                  X
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <p className="text-end">
                        Total pagar: <span className="fw-bold">${total}</span>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </nav>
          </div>

          {/* HERO (NO SE TOCA EL DISEÑO) */}
          <div className="row mt-5">
            <div className="col-md-6 text-center text-md-start pt-5">
              <h1 className="display-2 fw-bold">Modelo VAI</h1>

              <p className="mt-5 fs-5 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <p className="text-primary fs-1 fw-black">$399</p>

              <button
                type="button"
                className="btn fs-4 bg-primary text-white py-2 px-5"
                onClick={() => addGuitar(heroGuitar)}
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>

        <img
          className="header-guitarra"
          src="/img/header_guitarra.png"
          alt="guitarra"
        />
      </header>
    </>
  );
}