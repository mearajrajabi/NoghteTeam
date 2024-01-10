import Carousel from 'react-multi-carousel';
import Bagher from '../assets/img/bagher.jpg';
import Erfan from '../assets/img/erfan.jpg';
import Melaj from '../assets/img/Melaj.jpg';
import Mahdi from '../assets/img/Mahdi.jpg';

import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";


export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="about" id="abouts">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-bx wow zoomIn">
                        <h2>About Us</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme about-slider">
                            <div className="item">
                                <img src={Mahdi} alt="Image" />
                                <h5>Mahdi Heyrani</h5>
                                <h6>Front-End Developer</h6>
                                <p>"Mahdi has a keen interest in web technologies, website design, and making them responsive. He also has 3 years of experience working in this field and mobile development."</p>
                            </div>
                            <div className="item">
                                <img src={Bagher} alt="Image" />
                                <h5>Reza Bagheri</h5>
                                <h6>Back-End Developer</h6>
                                <p>"Reza Backend is the work of Monet's team and his specialty is C# language and Asp.net core framework. Interested in solving new problems and challenges. Reza is very enthusiastic and always tries to use the latest technologies and available tools in the implementation of projects."</p>
                            </div>
                            <div className="item">
                                <img src={Melaj} alt="Image" />
                                <h5>Mearaj Rajabi</h5>
                                <h6>Front-End Developer</h6>
                                <p>"Meraj is a front developer of our team. He is interested in designing website themes and making them beautiful. He has three years of experience in website design and development."</p>
                            </div>
                            <div className="item">
                                <img src={Erfan} alt="Image" />
                                <h5>Erfan Faridi</h5>
                                <h6>Back-End Developer</h6>
                                <p>"Erfan Faridi is a .net developer with three years of experience in software development. From the beginning of his career, his goal has been to produce high-quality products, and he has always moved towards improving the user experience and customer needs"</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
