export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-head">
        <p className="eyebrow">Contact Us</p>
        <h2>Find your way to us</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h4>Location</h4>
          <p>128 Olive Grove Avenue,<br />New York, NY 10012</p>
        </div>
        <div className="contact-card">
          <h4>Hours</h4>
          <p>
            Mon — Thu: 12 PM — 11 PM<br />
            Fri — Sun: 12 PM — 12 AM
          </p>
        </div>
        <div className="contact-card">
          <h4>Reservations</h4>
          <p>
            +1 (555) 019-2834<br />
            hello@bellacucina.com
          </p>
        </div>
      </div>
    </section>
  );
}
