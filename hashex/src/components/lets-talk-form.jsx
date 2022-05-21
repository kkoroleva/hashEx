import styles from '../components/lets-talk-form.module.css';

const LetsTalkForm = () => {
    return <section className={styles["lets-talk"]}>
        <h2 className="visually-hidden">Partnership Form</h2>
        <div className={styles["lets-talk__top-wrapper"]}>
            <p className={styles["lets-talk__header"]}>Become part of the DeFi intelligence alliance</p>
            <p className={styles["lets-talk__description"]}>Fill out this form and we will choose the best partnership offer for you</p>
            <ul className={styles["lets-talk__contacts-list"]}>
                <li className={styles["lets-talk__contacts-item"]}>
                    <a href="" className={styles["lets-talk__telegram"]}>telegram</a>
                </li>
                <li className={styles["lets-talk__contacts-item"]}>
                    <a href="mailto:contact@hashex.org" className={styles["lets-talk__mail"]}>contact@hashex.org</a>
                </li>
            </ul>
        </div>
        <form className={styles["lets-talk__form"]}>
            <input className={styles["lets-talk__input"]} type="text" name="" id="" placeholder='Name / Company Name' />
            <input className={styles["lets-talk__input"]} type="text" name="" id="" placeholder='Email*' required />
            <input className={styles["lets-talk__input"]} type="text" name="" id="" placeholder='Telegram' />
            <input className={styles["lets-talk__input"]} type="text" name="" id="" placeholder='Project link*' required />
            <textarea className={styles["lets-talk__input"]} name="" id="" cols="30" rows="10" placeholder='Tell us about yourself'>

            </textarea>
            <button className={styles["lets-talk__button"]} type="submit">Apply for partnership</button>
            <span className={styles["lets-talk__hint"]}>This site is protected by the&nbsp; 
                <a href="" className={styles["lets-talk__hint-link"]}>Privacy Policy</a>&nbsp;and&nbsp; 
                <a href="" className={styles["lets-talk__hint-link"]}>Cookie Policy</a>&nbsp;apply
            </span>
        </form>
    </section>;
}

export default LetsTalkForm;