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
                        <h2>نقطه ای ها</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme about-slider">
                            <div className="item">
                                <img src={Mahdi} alt="Image" />
                                <h5>مهدی حیرانی</h5>
                                <h6>Front-End Developer</h6>
                                <p>"مهدیِ تیم! علاقمند به طراحی رابط کاربری و پیاده سازی اونها در بستر وب و اپلیکیشن های موبایلی داره. توانایی حل مسئله ی بالایی داره و سعی میکنه همیشه ایده ها و طراح های به روزی زو ارائه بده. با 3 سال تجربه تو این زمینه خیلی تمیز میتونه کار رو در بیاره."</p>
                            </div>
                            <div className="item">
                                <img src={Bagher} alt="Image" />
                                <h5>رضا باقری</h5>
                                <h6>Back-End Developer</h6>
                                <p>"رضا بک اند کار تیم مونه و تخصصش زبان C# و فریمورک Asp.net core هست. علاقه مند به حل مسائل و چالش های جدیده. رضا خیلی مشتاق یادگیریه و همیشه سعی میکنه بروزترین تکنولوژی ها و ابزارهای موجود رو در پیاده سازی پروژه ها به استفاده کنه."</p>
                            </div>
                            <div className="item">
                                <img src={Melaj} alt="Image" />
                                <h5>معراج رجبی</h5>
                                <h6>Front-End Developer</h6>
                                <p>"Meraj is a front developer of our team. He is interested in designing website themes and making them beautiful. He has three years of experience in website design and development."</p>
                            </div>
                            <div className="item">
                                <img src={Erfan} alt="Image" />
                                <h5>عرفان فریدی</h5>
                                <h6>Back-End Developer</h6>
                                <p>"عرفان فریدی، یک توسعه‌دهنده دات‌نت متعهد ، مسئولیت پذیر  و با تجربه هست!  عرفان از نگرش مشتری‌محورانه استفاده می‌کنه تا همیشه مطمئن باشه محصولات نه تنها نیازهای مشتریانو برطرف می‌کنن، بلکه کیفیتشون هم فوق‌العاده‌س."</p>
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
