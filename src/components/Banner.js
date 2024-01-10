import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img1.png";
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "برنامه نویسی", "طراحی سایت", "توسعه اپ موبایل" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">خوش آمدید به نقطه</span>
                <h1>{`نقطه یک تیم `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "برنامه نویس", "طراح سایت", "توسعه دهنده موبایل" ]'><span className="wrap">{text}</span></span> است.</h1>
                  <p>تیم نرم افزاری نقطه، تجربه یه سفر خوب به دنیای نرم‌افزار رو برای شما فراهم میکنه. ما با کمک اعضای خلاق و با تجربه تیم مون، وبسایت‌های مدرن و مطابق با ارزش های کسب و کار شما ایجاد می‌کنیم. ما در تیم نقطه همواره تلاش مون بر اینه که که به کسب و کار شما کمک کنیم تا رشد کنه و به نقطه دلخواه شما برسه.
ما با استفاده از کدنویسی اختصاصی، اول از همه سایتی رو طراحی میکنیم که مطابق با انتظارات و نیازهای شما باشه و در مرحله بعد بهترین سرعت و بیشترین امنیت رو به همراه داشته باشه.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
