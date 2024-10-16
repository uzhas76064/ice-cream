import PropTypes from "prop-types";

import styles from "./Product.module.css";
import Button from "../UI/Button/Button.jsx";

const ProductCost = ({costByCard, cost}) => {
    return (
        <div className={styles.productItemCost}>
            <div className={styles.costByCard}>
                <b>{costByCard} &#8381;</b><br/>
                <small className={styles.subTitle}>С картой</small>
            </div>
            <div className={styles.defaultCost}>
                <span>{cost} &#8381;</span><br/>
                <small className={styles.subTitle}>Обычная</small>
            </div>
        </div>

    )
}

const Product = ({image, title, costByCard, cost, addToCart}) => {
    const product = { title, costByCard, cost, image };

    return (
        <li className={styles.product}>
            <article className={styles.productItem}>
                <img className={styles.productImage} src={image} alt={title}/>
                <ProductCost costByCard={costByCard} cost={cost} />
                <p className={styles.productTitle}>{title}</p>
                <div className="in-favorite"></div>
                <Button className={styles.addButton} eventHandler={() => addToCart(product)}>
                    В корзину
                </Button>
            </article>
        </li>
    )
}

ProductCost.propTypes = {
    costByCard: PropTypes.number,
    cost: PropTypes.number
}

Product.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    cost: PropTypes.number,
    costByCard: PropTypes.number,
    addToCart: PropTypes.func,
}

export default Product;