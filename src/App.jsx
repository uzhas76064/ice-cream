import Header from "./components/Header/Header.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./global.css";
import {useEffect, useState} from "react";

function App() {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);
    };


  return (
    <>
        <Header cartItems={cartItems} />
        <Catalog addToCart={addToCart} />
        <Footer/>
    </>
  )
}

export default App
