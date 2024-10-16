import PropTypes from "prop-types";

import styles from "./Product.module.css";

const ProductCost = ({costByCard, cost}) => {
    return (
        <div className="product-item__cost">
            <div className="product-item__cost--by-card">
                <b>{costByCard} &#8381;</b>
                <small>С картой</small>
            </div>
            <div className="product-item__cost--default">
                <span>{cost} &#8381;</span>
                <small>С картой</small>
            </div>
        </div>

    )
}

const Product = ({image, title, costByCard, cost}) => {
    return (
        <li className={styles.product}>
            <article className="product-item">
                <img className={styles.productImage} src={image} alt={title}/>
                <ProductCost costByCard={costByCard} cost={cost} />
                <h3 className="product-item__title title">{title}</h3>
                <div className="in-favorite"></div>
                <button className="button">В корзину</button>
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
}

export default Product;