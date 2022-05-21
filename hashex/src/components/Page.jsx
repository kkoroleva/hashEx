import styles from './Page.module.css';
import MainHeader from './main-header';
import Promo from './promo';
import PartnershipForm from './lets-talk-form';
import MainFooter from './main-footer';

const Page = () => {
    return <>
    <MainHeader />
    <Promo />
    <PartnershipForm />
    <h1 className="visually-hidden">Partners Page</h1>
    <MainFooter />
    </>;
}
//
export default Page;