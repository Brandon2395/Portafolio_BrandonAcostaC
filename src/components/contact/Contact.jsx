import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ohzwszl', 'template_nd32faj', form.current, 'zFQuYCbLailAWRqxe')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>acostabrandon2395@gmail.com</h5>
            <a href="mailto:acostabrandon2395@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Brandon Acosta</h5>
            <a href="https://m.me/brandon.acostacascante" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/+50688552235" target='_blank'>Send a message</a>
          </article>
        </div>
      {/* TERMIAN LAS OPCIONES DE CONTACTO */}  
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name= "name" className="name" placeholder='Your Full Name' required />
        <input type="email" name= "email" className="email" placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
      </div>
    </section>
  )
}

export default Contact