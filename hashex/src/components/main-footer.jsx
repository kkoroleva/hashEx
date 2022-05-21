import logo from '../assets/logo-footer.svg';
import styles from '../components/main-footer.module.css';

const MainFooter = () => {
    return <footer className={styles["main-footer"]}>
        <nav className={styles["main-footer__nav"]}>

            <div className="main-footer__copyright-wrapper">
                <img className={styles["main-footer__logo"]} src={logo} width="136" height="20" alt='Logo' />
                <ul className={styles["main-footer__smm-list"]}>
                    <li className={styles["main-footer__smm-item"]}>
                        <a href="#" className={`${styles["main-footer__smm-link"]} ${styles["medium"]}`}>
                            Medium
                        </a>
                    </li>
                    <li className={styles["main-footer__smm-item"]}>
                        <a href="#" className={`${styles["main-footer__smm-link"]} ${styles["twitter"]}`}>
                            Twitter
                        </a>
                    </li>
                    <li className={styles["main-footer__smm-item"]}>
                        <a href="#" className={`${styles["main-footer__smm-link"]} ${styles["linkedin"]}`}>
                            LinkedIn
                        </a>
                    </li>
                    <li className={styles["main-footer__smm-item"]}>
                        <a href="#" className={`${styles["main-footer__smm-link"]} ${styles["github"]}`}>
                            Github
                        </a>
                    </li>
                    <li className={styles["main-footer__smm-item"]}>
                        <a href="#" className={`${styles["main-footer__smm-link"]} ${styles["mail"]}`}>
                            Mail
                        </a>
                    </li>
                    <li className={styles["main-footer__smm-item"]}>
                        <a href="#" className={`${styles["main-footer__smm-link"]} ${styles["telegram"]}`}>
                            Telegram
                        </a>
                    </li>
                </ul>

                <ul className={styles["main-footer__copyright-list"]}>
                    <li className={styles["main-footer__copyright-item"]}>
                        © All rights reserved
                    </li>
                    <li className={styles["main-footer__copyright-item"]}>
                        <a href="#" className={styles["main-footer__copyright-link"]}>
                            Privacy Policy
                        </a>
                    </li>
                    <li className={styles["main-footer__copyright-item"]}>
                        <a href="#" className={styles["main-footer__copyright-link"]}>
                            Cookie Policy
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles["main-footer__nav-lists"]}>

                <div className="main-footer__column-wrapper">
                    <ul className={styles["main-footer__nav-list"]}>
                        <li className={`${styles["main-footer__nav-item"]} ${styles["main-footer__nav-item--header"]}`}>
                            AUDITS
                        </li>
                        <li className={styles["main-footer__nav-item"]}>
                            <a href="#" className={styles["main-footer__nav-link"]}>
                                Smart Contracts Audit
                            </a>
                        </li>
                        <li className={styles["main-footer__nav-item"]}>
                            <a href="#" className={styles["main-footer__nav-link"]}>
                                Conducted audits
                            </a>
                        </li>
                    </ul>

                    <ul className={styles["main-footer__nav-list"]}>
                        <li className={`${styles["main-footer__nav-item"]} ${styles["main-footer__nav-item--header"]}`}>
                            CHAINS
                        </li>
                        <li className={styles["main-footer__nav-item"]}>
                            <a href="#" className={styles["main-footer__nav-link"]}>
                                BSC
                            </a>
                        </li>
                        <li className={styles["main-footer__nav-item"]}>
                            <a href="#" className={styles["main-footer__nav-link"]}>
                                Fantom
                            </a>
                        </li>
                        <li className={styles["main-footer__nav-item"]}>
                            <a href="#" className={styles["main-footer__nav-link"]}>
                                Solana
                            </a>
                        </li>
                        <li className={styles["main-footer__nav-item"]}>
                            <a href="#" className={styles["main-footer__nav-link"]}>
                                Avalanche
                            </a>
                        </li>
                        <li className={styles["main-footer__nav-item"]}>
                            <a href="#" className={styles["main-footer__nav-link"]}>
                                Avrora
                            </a>
                        </li>
                        <li className={styles["main-footer__nav-item"]}>
                            <a href="#" className={styles["main-footer__nav-link"]}>
                                Polygon
                            </a>
                        </li>
                        <li className={styles["main-footer__nav-item"]}>
                            <a href="#" className={styles["main-footer__nav-link"]}>
                                Gnosis Chain
                            </a>
                        </li>
                    </ul>
                </div>

                <ul className={styles["main-footer__nav-list"]}>
                    <li className={`${styles["main-footer__nav-item"]} ${styles["main-footer__nav-item--header"]}`}>
                        TYPES OF AUDITS
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            NFT
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Staking
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Stablecoin audit
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            DApp audit
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            DEX audit
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            RFI token audit
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            BabyToken audit
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Farms audit
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            DAO audit
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            erc20, erc721, erc1155
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Marketplaces, auctions, games
                        </a>
                    </li>
                </ul>

                <ul className={styles["main-footer__nav-list"]}>
                    <li className={`${styles["main-footer__nav-item"]} ${styles["main-footer__nav-item--header"]}`}>
                        SERVICES
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Security Audits

                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Smart Contracts Development
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Сonsulting
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Blockchain risk analysis
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Blockchain Integration

                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Blockchain developer
                        </a>
                    </li>
                </ul>

                <ul className={styles["main-footer__nav-list"]}>
                    <li className={`${styles["main-footer__nav-item"]} ${styles["main-footer__nav-item--header"]}`}>
                        PRODUCTS
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            AnalytEx
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            CryptEx
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Online ABI Encoder
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Paper Wallet
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            AMM plugin for margin trading
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Multi-convertor
                        </a>
                    </li>
                </ul>

                <ul className={styles["main-footer__nav-list"]}>
                    <li className={`${styles["main-footer__nav-item"]} ${styles["main-footer__nav-item--header"]}`}>
                        COMPANY
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            About us
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Media
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Careers
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Customers
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Partners

                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Blog
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            FAQ
                        </a>
                    </li>
                    <li className={styles["main-footer__nav-item"]}>
                        <a href="#" className={styles["main-footer__nav-link"]}>
                            Contact us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </footer>;
}

export default MainFooter;