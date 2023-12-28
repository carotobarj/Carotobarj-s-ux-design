import "./Contact.css";


function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
      
      <a href="https://www.linkedin.com/in/carolina-tobar-jaramillo/" className="contact LinkedIn" target={"blank"}>
      <img src="https://img.icons8.com/nolan/64/linkedin.png"/>
          <h2>
            LinkedIn 
          </h2>
        </a>
        <a href="https://github.com/carotobarj" className="contact github" target={"blank"}>
        <img src="https://img.icons8.com/stickers/100/000000/github.png"/>
          <h2>
            Github 
          </h2>
        </a>
        <a href="mailto:carotobarj@gmail.com" className="contact gmail"  target={"blank"}>
        <img src="https://img.icons8.com/color/48/000000/gmail-new.png"/>
          <h2>
            Gmail 
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
