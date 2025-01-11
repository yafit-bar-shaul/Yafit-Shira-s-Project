import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return <>
    <footer className="footer">
            <div className="footer-info">
              <div className="footer-item">
                <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                <span>contact@perfumery.com</span>
              </div>
              <div className="footer-item">
                <span>050-1234567</span>
                <FontAwesomeIcon icon={faPhone} className="footer-icon" />
              </div>
              <div className="footer-item">
                <span>רחוב הבשמים 10, תל אביב</span>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
              </div>
            </div>
            <br />
            <div>&copy; כל הזכויות שמורות</div>
          </footer>
       </>
}

export default Footer;