import ProductsList from "../ProductsList/ProductsList.jsx";
import Title from "../UI/Title/Title.jsx";

import styles from "./Catalog.module.css";
import PropTypes from "prop-types";

const Catalog = ({addToCart}) => {
    return (
        <section className={styles.catalog}>
            <div className={styles.container}>
                <Title type={'h1'}>Каталог продукции</Title>
                <ProductsList addToCart={addToCart} />
            </div>
        </section>
    )
}

Catalog.propTypes = {
    addToCart: PropTypes.func.isRequired,
}

export default Catalog;