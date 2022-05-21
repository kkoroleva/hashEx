import styles from '../components/partnership-formula.module.css';

const PartnershipFormula = () => {
    return <section className={styles["formula"]}>
        <div className={styles["formula__wrapper"]}>
            <h2 className={styles["formula__header"]}>The Partnership Formula</h2>
            <ul className={styles["formula__list"]}>
                <li className={styles["formula__item"]}>
                    <h3 className={styles["formula__item-header"]}>Referral bonus</h3>
                    <p className={styles["formula__item-description"]}>
                        For our referral partners we have prepared a bonus reward. If you know someone who needs our services, let us know about it.
                    </p>
                </li>
                <li className={styles["formula__item"]}>
                    <h3 className={styles["formula__item-header"]}>Discounts</h3>
                    <p className={styles["formula__item-description"]}>
                        For our partners we provide discounts on our services.
                    </p>
                </li>
                <li className={styles["formula__item"]}>
                    <h3 className={styles["formula__item-header"]}>Brand avernes</h3>
                    <p className={styles["formula__item-description"]}>
                        We provide marketing support in our communities for our partners.
                    </p>
                </li>
            </ul>
        </div>
    </section>;
}

export default PartnershipFormula;