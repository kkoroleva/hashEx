import MainHeader from './main-header';
import Promo from './promo';
import Strengths from './strengths';
import PartnershipFormula from './partnership-formula';
import LetsTalkForm from './lets-talk-form';
import MainFooter from './main-footer';

const Page = () => {
    return <>
    <MainHeader />
    <h1 className="visually-hidden">Partners Page</h1>
    <Promo />
    <Strengths />
    <PartnershipFormula />
    <LetsTalkForm />
    <MainFooter />
    </>;
}
//
export default Page;