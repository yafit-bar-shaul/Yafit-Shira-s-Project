import { Helmet } from 'react-helmet';

import './Css/About.css'
function About() {
    return (
        <div className="about-container">
          <Helmet>
        <title>Perfumery/About</title>
      </Helmet>
        <h1 className="about-title">קצת עלינו</h1>
        <b><p className="about-text">
          הבשמים שלנו מיוצרים תוך הקפדה חסרת פשרות על <span className="highlight">איכות</span>, 
          יוקרה ואסתטיקה,  אנו משתמשים בחומרים הטבעיים האיכותיים ביותר, שנבחרו בקפידה מרחבי העולם 
          כל ניחוח הוא יצירה ייחודית, המשלבת את אמנות הבשמים עם השראה מתרבויות ומסורות רחוקות
        </p>
        <p className="about-text">
          המטרה שלנו היא להעניק לכל לקוח <span className="highlight">חוויה רב-חושית</span>, 
          המגשרת בין זיכרונות נעימים לעתיד מלא השראה, כל בקבוק עובר תהליך עיצוב ידני, 
          ומשלב אסתטיקה מודרנית עם נגיעה קלאסית
        </p>
        <p className="about-text">
          אנו מאמינים בכוחו של ריח לשנות מצבים, לעורר רגשות ולספר סיפורים. 
          בשמים יוקרתיים הם לא רק מוצר - הם <span className="highlight">חוויה</span>,
          סמל למיוחדות ולרגעים בלתי נשכחים

        </p></b>
      </div>
    );
  };
  
  export default About;
    