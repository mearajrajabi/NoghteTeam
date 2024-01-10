import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/communicate2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container className="container_contacts">
        <div><img src={contactImg} alt="" /></div>
        <div className="container_boxContact">
                <h1 className="title">
                راه های ارتباط با ما
                </h1>
                <a target="_blank" href="https://t.me/RezaBagheri31"> <div className="boxSocial">
                <i class="fa-brands fa-telegram"></i>
                <span>تلگرام</span>
                </div></a>
                <a target="_blank" href="https://www.linkedin.com/in/rezabagheri3">
                <div className="boxSocial">
                <i class="fa-brands fa-linkedin"></i>
                <span>لینکدین</span>
                </div>
                </a>
                <a target="_blank" href="tel:09393255103">
                <div className="boxSocial">
                <i class="fa-solid fa-square-phone"></i>
                <span>09393255103</span>
                </div>
                </a>
                <div className="boxSocial">
                <i class="fa-regular fa-envelope"></i>
                <span>NoghteTeam@gmail.com</span>
                </div>
        </div>
      </Container>
    </section>
  )
}
