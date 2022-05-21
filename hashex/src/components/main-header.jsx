import logo from '../assets/logo.svg';
import styles from '../components/main-header.module.css';

const MainHeader = () => {
    return <header className={styles.header}>
        <nav className={styles["main-header__nav"]}>
            <img className={styles["main-header__logo"]} src={logo} width="160" height="50" alt='Logo' />
            <ul className={styles["main-header__nav-list"]}>
                <li className={styles["main-header__nav-item"]}>
                    <a href="#" className={styles["main-header__nav-link"]}>
                        Audits
                    </a>
                </li>
                <li className={styles["main-header__nav-item"]}>
                    <a href="#" className={styles["main-header__nav-link"]}>
                        Services
                    </a>
                </li>
                <li className={styles["main-header__nav-item"]}>
                    <a href="#" className={styles["main-header__nav-link"]}>
                        Products
                    </a>
                </li>
                <li className={styles["main-header__nav-item"]}>
                    <a href="#" className={styles["main-header__nav-link"]}>
                        Company
                    </a>
                </li>
                <li className={`${styles["main-header__nav-item"]} ${styles["main-header__nav-item--form-link"]}`}>
                    <a href="#" className={styles["main-header__nav-link"]}>
                        <span className={styles["main-header__nav-span"]}>Let&#39;s Talk</span> 
                    </a>
                </li>
            </ul>
        </nav>
    </header>;
}

export default MainHeader;