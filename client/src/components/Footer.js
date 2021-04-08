import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import '../css/Footer.css';

const Footer = ()=>(
  <footer>
    <address className="contactContainer">
      <div className="mo_email">
        <a href="mailto:info@bacalhauent.com" className="email">info@bacalhauent.com</a>
      </div>
      <div className="socialContactContainer">
        <a href="https://www.facebook.com/bacalhau.ent" target="__blank"><FontAwesomeIcon className="socialIcon" icon={faFacebook} color="#fff" size="lg"/></a>
        <a href="https://www.instagram.com/bacalhau.ent/" target="__blank"><FontAwesomeIcon className="socialIcon" icon={faInstagram} color="#fff" size="lg"/></a>
        <a href="https://www.youtube.com/bacalhauent" target="__blank"><FontAwesomeIcon className="socialIcon" icon={faYoutube} color="#fff" size="lg"/></a>
      </div>
    </address>
  </footer>
)

export default Footer;