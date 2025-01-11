import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Css/PerfumeDetails.css";

function PerfumeDetails() {
  const {  company, price, mil, img } = useParams();

  return (
    <div className="perfume-details-container">
      <Helmet>
        <title>Perfumery/Perfume details</title>
      </Helmet>
      <h1 className="perfume-details-title">פרטי מוצר</h1>
      <div className="perfume-details-card">
        <img src={`/images/${img}`} alt={company} className="perfume-img" />
        <div className="perfume-details-info">
          <p className="perfume-detail"> <span>{company}</span>:חברה</p>
          <p className="perfume-detail">מחיר: <span>₪{price}</span></p>
          <p className="perfume-detail">כמות: <span>{mil} מ״ל</span></p>
        </div>
      </div>
    </div>
  );
}

export default PerfumeDetails;
