import {products} from "../../mock.js";
import Product from "../Product/Product.jsx";

import styles from "./ProductsList.module.css";

const ProductsList = (props) => {
    return (
        <ul className={styles.productsList}>
            {products.map((product) => {
                return <Product key={product.id} {...product} />;
            })}
        </ul>
    )
}

export default ProductsList;