import ProductsList from "../ProductsList/ProductsList.jsx";

const Catalog = (props) => {
    return (
        <section className="catalog">
            <div className="container">
                <ProductsList/>
            </div>
        </section>
    )
}

export default Catalog;