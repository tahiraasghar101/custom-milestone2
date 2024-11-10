export default function Contact() {
    return (
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-description">Feel free to get in touch with me using the form below.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="contact-input" required />
          <input type="email" placeholder="Your Email" className="contact-input" required />
          <textarea placeholder="Your Message" className="contact-textarea" required></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    );
  }
  