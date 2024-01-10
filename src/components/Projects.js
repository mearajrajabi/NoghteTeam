import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import mpProj1 from "../assets/Projects/mp1.jpg";
import mpProj2 from "../assets/Projects/mp2.jpg";
import mpProj3 from "../assets/Projects/mp3.jpg";
import mpProj4 from "../assets/Projects/mp4.jpg";
import bekrinoProj1 from "../assets/Projects/bekrino1.jpg";
import bekrinoProj2 from "../assets/Projects/bekrino2.jpg";
import bekrinoProj3 from "../assets/Projects/bekrino3.jpg";
import bekrinoProj4 from "../assets/Projects/bekrino4.jpg";
import musicProj1 from "../assets/Projects/musicProj1.jpg";
import musicProj2 from "../assets/Projects/musicProj2.jpg";
import musicProj3 from "../assets/Projects/musicProj3.jpg";
import musicProj4 from "../assets/Projects/musicProj4.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = ({changeState}) => {

  const mpProj = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: mpProj1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: mpProj2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: mpProj3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: mpProj4,
    }
  ];
  const bekrinoProj = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: bekrinoProj1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: bekrinoProj2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: bekrinoProj3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: bekrinoProj4,
    }
  ];
  const musicProj = [
    {
      title: "صفحه ی اصلی",
      description: "Design & Development",
      imgUrl: musicProj1,
    },
    {
      title: "جستجوی ی آهنگ",
      description: "Design & Development",
      imgUrl: musicProj2,
    },
    {
      title: "آهنگ های موردعلاقه",
      description: "Design & Development",
      imgUrl: musicProj3,
    },
    {
      title: "فرم ورود یا عضویت",
      description: "Design & Development",
      imgUrl: musicProj4,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>پروژه هامون</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <p>بریم یه تعدادی از نمونه کار هایی که تا به الان زدیم رو باهم ببینیم...</p>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">MP</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Bekrino</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Music Player</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p>این وب سایت رو برای یه شرکت تولیدی و پخش کاغذ دیواری در مشهد ساختیم.</p>
                      <Row>
                        {
                          mpProj.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                changeState={changeState}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>یه وبسایت فروش دوره های آموزشی برای یه گروه جوان و با انگیزه مثل خودمون زدیم.</p>
                      <Row>
                          {
                            bekrinoProj.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  changeState={changeState}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>وب اپلیکیشن پخش موزیک یکی از پروژه های قوی مونه چون تو این پروژه نمونه ای از سایت بزرگ spotify است و تا جایی که تونستیم سعی کردیم بهتر از آن با امکانات بیشتر پیاده سازی کنیم.</p>
                      <Row>
                            {
                              musicProj.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    changeState={changeState}
                                    />
                                )
                              })
                            }
                          </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
