import styles from "../styles/ProductsList.module.css"
import ProductCard from "./ProductCard"

function ProductsList( {productsList} ) {
    return (
        <section id="products">
            <div className={styles.container}>
                <h1 className={styles.title}>
                    BEST PIZZAS IN THE CITY
                </h1>
                <p className={styles.desc}>
                    Try and order one of our pizzas! To access the admin dashboard by typing &quot;/admin&ldquo; at the end of the url, in the dashboard you will be able to upload your own pizza and see how other orders are going! (user: admin)(pass: 123456)
                </p>
                <div className={styles.wrapper}>
                    {productsList.map((pizza) => (
                        <ProductCard key={pizza._id} pizza={pizza}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductsList
