import {products} from "../../mock.js";
import ProductsListItem from "../Product/ProductsListItem.jsx";

const ProductsList = (props) => {
    return (
        <ul className='products-list'>
            {products.map((product) => {
                return <ProductsListItem key={product.id} {...product} />;
            })}
        </ul>
    )
}

export default ProductsList;