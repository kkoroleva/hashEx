import styles from '../components/promo.module.css';
import apeswap from '../assets/apeswap.png';
import liquid from '../assets/Liquid Collectibles.png';
import yourslogo from '../assets/yours.png';
import forta from '../assets/forta.png';
import gnosis from '../assets/Gnosis.png';
import polygon from '../assets/polygon.png';
import analytex from '../assets/apeswap.png';
import cryptEx from '../assets/CryptEx.png';


const Promo = () => {
    return <section className={styles["promo"]}>
        <div className={styles["promo__wrapper"]}><h2 className={styles["promo__header"]}>HashEx affiliate program</h2>
            <p className={styles["promo__description"]}>Support the HashEx mission of making the DeFi market a safe space while taking advantage of HashEx offers.</p>
            <button className={styles["promo__button"]}>Apply for partnership </button>
            <ul className={styles["promo__partners-list"]}>
                <li className={styles["promo__partners-item"]}>
                    <a href="" className="promo__partners-link">
                        <img src={apeswap} alt="ApeSwap" />
                    </a>
                </li>
                <li className={styles["promo__partners-item"]}>
                    <a href="" className="promo__partners-link">
                        <img src={liquid} alt="Liquid Solution" />
                    </a>
                </li>
                <li className={styles["promo__partners-item"]}>
                    <a href="" className={`${styles["promo__partners-link"]} ${styles["yours-logo"]}`}>
                        <img src={yourslogo} alt="Yours Logo" />
                    </a>
                </li>
                <li className={styles["promo__partners-item"]}>
                    <a href="" className="promo__partners-link">
                        <img src={forta} alt="Forta" />
                    </a>
                </li>
                <li className={styles["promo__partners-item"]}>
                    <a href="" className="promo__partners-link">
                        <img src={gnosis} alt="Gnosis" />
                    </a>
                </li>
                <li className={styles["promo__partners-item"]}>
                    <a href="" className="promo__partners-link">
                        <img src={polygon} alt="Polygon" />
                    </a>
                </li>
                <li className={styles["promo__partners-item"]}>
                    <a href="" className="promo__partners-link">
                        <img className="analytex" src={analytex} alt="Analytex" />
                    </a>
                </li>
                <li className={styles["promo__partners-item"]}>
                    <a href="" className="promo__partners-link">
                        <img className="cryptEx" src={cryptEx} alt="CryptEx" />
                    </a>
                </li>
            </ul>
        </div>

    </section>;
}

export default Promo;