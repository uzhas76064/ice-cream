import Product from "../Product/Product.jsx";

import styles from "./ProductsList.module.css";
import {useEffect, useState} from "react";

const ProductsList = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

// Используем useEffect для получения данных с сервера при загрузке компонента
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://webapi.omoloko.ru/api/v1/products');

                if (!response.ok) {
                    throw new Error('Ошибка при получении данных');
                }

                const data = await response.json();

                setProducts(data); // Устанавливаем полученные данные в стейт
            } catch (error) {
                setError(error.message); // Устанавливаем ошибку
            } finally {
                setLoading(false); // Завершаем состояние загрузки
            }
        };

        fetchProducts();
    }, []); // Пустой массив зависимостей для выполнения только при монтировании компонента

    if (loading) {
        return <div>Загрузка...</div>;
    }
    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
            <ul className={styles.productsList}>
                {products.products.map((product) => {
                    return <Product key={product.id} {...product} {...props}/>;
                })}
            </ul>
    )
}

export default ProductsList;