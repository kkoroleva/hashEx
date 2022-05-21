/*The partnership formula
Referral bonus
Discounts
Brand avernes
For our referral partners we have prepared a bonus reward. If you know someone who needs our services, let us know about it.
For our partners we provide discounts on our services.
We provide marketing support in our communities for our partners.*/

import styles from '../components/partnership-formula.module.css';


const PartnershipForm = () => {
    return <section className={styles["partnership-form"]}>
        <h2 className="visually-hidden">Partnership Form</h2>
        <div className="partnership-form__top-wrapper">
            <p className="partnership-form__header">Become part of the DeFi intelligence alliance</p>
            <p className="partnership-form__description">Fill out this form and we will choose the best partnership offer for you</p>
        </div>
        <form className="partnership-form__form form">
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="submit"></button>
        </form>
    </section>;
}

export default PartnershipForm;