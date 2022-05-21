import styles from '../components/strengths.module.css';

const Strengths = () => {
    return <section className={styles["strengths"]}>
        <h2 className="visually-hidden">Our company strengths</h2>
        <p className={styles["strengths__header"]}>HashEx is an expert in DeFi intelligence and blockchain security</p>
        <ul className={styles["strengths__list"]}>
            <li className={styles["strengths__item"]}>
                <h3 className={styles["strengths__item-header"]}>Relevant data</h3>
                <p className={styles["strengths__item-description"]}>
                    Providing factual and relevant data regarding new and existing DeFi projects as well as the latest activities on the market.
                </p>
            </li>
            <li className={styles["strengths__item"]}>
                <h3 className={styles["strengths__item-header"]}>Recommendations</h3>
                <p className={styles["strengths__item-description"]}>
                    One of the leading smart contract auditors, we deliver in-depth audit reports, providing not only a list of detected issues but also recommendations on how to fix them.
                </p>
            </li>
            <li className={styles["strengths__item"]}>
                <h3 className={styles["strengths__item-header"]}>Influential name</h3>
                <p className={styles["strengths__item-description"]}>
                    Over the years, HashEx has grown to become one of the most impactful tech advisories in the world and the auditor of choice for many big names and ecosystems in the DeFi space.
                </p>
            </li>
        </ul>
    </section>;
}

export default Strengths;