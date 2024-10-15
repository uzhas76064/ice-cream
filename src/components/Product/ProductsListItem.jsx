import PropTypes from "prop-types";

const ProductsListItem = ({image, title, costByCard, cost}) => {
    return (
        <li className="products-list__item product">
            <article className="product-item">
                <img src={image} alt={title}/>
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
                <h3 className="product-item__title title">{title}</h3>
                <div className="in-favorite"></div>
                <button className="button">В корзину</button>
            </article>
        </li>
    )
}

ProductsListItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    cost: PropTypes.number,
    costByCard: PropTypes.number,
}

export default ProductsListItem;