import {products} from '../data/products';
import styles from '../styles/Home.module.css';

function HomePage() {
    return (
        <div>
            <h1>Каталог товаров</h1>
            <div className={styles.products_grid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.product_card}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>{product.price} р</p>
                        <button>В корзину</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage;
