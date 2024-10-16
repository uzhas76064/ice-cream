import ProductsList from "../ProductsList/ProductsList.jsx";
import Title from "../UI/Title/Title.jsx";

import styles from "./Catalog.module.css";

const Catalog = ({addToCart}) => {
    return (
        <section className={styles.catalog}>
            <div className="container">
                <Title type={'h2'}>Каталог продукции</Title>
                <ProductsList addToCart={addToCart} />
            </div>
        </section>
    )
}

export default Catalog;