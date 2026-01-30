import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/guitarras"

function App(){

  const cartInStorage = localStorage.getItem('cart')
  const initialCart = cartInStorage ? JSON.parse(cartInStorage) : []
    const [ guitars  ] = useState(db)
    const  [ cart, setCart ] = useState(initialCart)

    const addGuitar = (guitar) => {
    console.log('Recibe Guitar', guitar.nombre)
    const idExists = cart.findIndex(g => g.id === guitar.id)
    if(idExists === -1){  
        const newCart = [...cart,{
        ...guitar,
        cantidad: 1
        }]
        setCart(newCart)
    } else {
      const newCart = [...cart] /* ... son para los arrays y objetos */
        newCart[idExists].cantidad++  
        setCart(newCart)  
    }
}

const removeGuitar =(id)=> {
    const newCart = cart.filter(g => g.id !== id)
    setCart(newCart)
}

const addOne = id => {
    const idxGuitar =cart.findIndex(g => g.id === id)
    const newCart = [...cart]
    if (idxGuitar === -1) {
        console.log('No existe la guitarra')
    } else {
        newCart[idxGuitar].cantidad++
        setCart(newCart)
    }
}


const subsOne = id => {
    const idxGuitar =cart.findIndex(g => g.id === id)
    const newCart = [...cart]
    if (newCart[idxGuitar].cantidad === 1) {
        removeGuitar(id)
    } else {
        newCart[idxGuitar].cantidad--
        setCart(newCart)
    }
    

}   


const clearCart = () =>{
    setCart([])
}

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])

    return (
    <>
    <Header
    cart={cart}
    removeGuitar={removeGuitar}
    addOne={addOne}
    clearCart={clearCart}
    subsOne={subsOne}
    guitar = { guitars [3]}
    addGuitar={addGuitar}
    >
    </Header> 
    
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
        {
            guitars.map(guitar => <Guitar 
                                key={guitar.id}
                                addGuitar={addGuitar}
                                guitar={guitar}
                                />)
        }
        </div>
    </main>
<Footer></Footer>
    </>
    )



}export default App