import React, { useEffect } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import linkedin_icon from '../../assets/linkedin-icon.png'
import github_icon from '../../assets/github-icon.png'
import twitter_icon from '../../assets/twitter-icon.png'
import white_arrow from '../../assets/white_arrow.png'
import dark_arrow from '../../assets/dark_arrow.png'
import outlook_icon from '../../assets/outlook-icon.png'
import loading_icon from '../../assets/loading-icon.gif'

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [result, setResult] = React.useState("");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d1cd028e-319b-4de6-968c-f09cf6d4e187");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully. Thank you for contacting me!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Send me a message! <img src={msg_icon} alt=""/></h3>
            <p>Let's Connect! Fill out the form or send me an email 🌍</p>
            <ul>
            {isLoading && (
              <div className = "loading-overlay">
                <img src={loading_icon} alt="Loading..." />
              </div>
            )}
                <li>
                  <a href="mailto:samantha.la7295@gmail.com" style={{ display: "flex", alignItems: "center", cursor: "pointer", textDecoration: "none" }}>
                    <img src={mail_icon} alt=""/>
                    samantha.la7295@gmail.com
                  </a>
                </li>
                <li>
                  <a href="mailto:sla@uwaterloo.ca" style={{ display: "flex", alignItems: "center", cursor: "pointer", textDecoration: "none" }}>
                    <img src={outlook_icon} alt=""/>sla@uwaterloo.ca
                  </a>
                </li>
                  
                <li> 
                  <a href="https://www.linkedin.com/in/samanthala/" target="_blank" rel="noopener noreferrer">
                      <img src={linkedin_icon} alt=""/>
                      linkedin.com/in/samanthala
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Samantha7295" target="_blank" rel="noopener noreferrer">
                    <img src={github_icon} alt=""/>
                    github.com/Samantha7295
                  </a>
                </li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name = 'name' placeholder = 'Enter your name' required/>
            <label>Email</label>
            <input type = "tell" name = 'email' placeholder = 'Enter your email' required/>
            <label>Write your message here</label>
            <textarea name = 'message' rows="6" placeholder = 'Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
