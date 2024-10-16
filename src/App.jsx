import Header from "./components/Header/Header.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./global.css";
import {useEffect, useState} from "react";
import Promo from "./components/Promo/Promo.jsx";

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
        <Promo>Доставка бесплатно от 1000 &#8381;</Promo>
        <Catalog addToCart={addToCart} />
        <Footer/>
    </>
  )
}

export default App
