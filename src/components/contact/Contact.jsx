import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";


const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      )
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
        <div><img src="./communicate.png" alt="" /></div>
        <div>
                <h1 className="title">
                Let’s work together
                </h1>
                <div className="boxSocial">
                <i class="fab fa-instagram"></i>
                <span>Instagram</span>
                </div>
                <div className="boxSocial">
                <i class="fa-brands fa-whatsapp"></i>
                <span>Whatsapp</span>
                </div>
                <div className="boxSocial">
                <i class="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
                </div>
                <div className="boxSocial">
                <i class="fa-solid fa-square-phone"></i>
                <span>PhoneNumber</span>
                </div>
                <div className="boxSocial">
                <i class="fa-regular fa-envelope"></i>
                <span>Email</span>
                </div>
        </div>
      
   
    </motion.div>
    
  );
};

export default Contact;
