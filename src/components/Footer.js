import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
    
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <p>تمامی حقوق مادی و معنوی این سایت متعلق به نقطه می باشد و هرگونه کپی برداری غیرقانونی محسوب خواهد شد</p>
          <Col size={12} sm={6} className="text-center text-sm-end">
            {/* <div className="social-icon">
             <a href="https://www.linkedin.com/in/rezabagheri3"> <i class="fa-brands fa-linkedin"></i></a>
                <a href="https://t.me/RezaBagheri31"><i class="fa-brands fa-telegram"></i></a>
                <a href="#"><i class="fa-regular fa-envelope"></i></a>
            </div>  */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
