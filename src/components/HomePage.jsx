import { Helmet } from 'react-helmet';

import  './Css/HomePage.css';
function HomePage() {


    return <>
    <div>
    <Helmet>
        <title>Perfumery/HomePage</title>
        <link rel="icon" href="/images/LOGO.ico" sizes="16x16" />

      </Helmet>
    </div>
        <div className="background"></div>

    {/* דף הבית תמונות פרטים וכו */}
       </>

}

export default HomePage;