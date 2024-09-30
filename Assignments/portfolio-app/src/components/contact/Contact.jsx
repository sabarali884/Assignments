import React from 'react'
import './contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "44622fff-44bd-4523-b1ab-a01ec726bcb2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div onSubmit={onSubmit} id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <din className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /><p>abdullahtayyab@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>+92-301-6087420</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /><p>Jaranwala, Pakistan</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" name="email" placeholder='Enter your email' />
          <label htmlFor="">Enter your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </din>
    </div>
  )
}

export default Contact