export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="eyebrow">Welcome to Bella Cucina</p>
        <h1>
          An unforgettable <span>dining experience</span>
        </h1>
        <p className="hero-text">
          Handcrafted dishes made from the freshest local ingredients, served
          with passion in an atmosphere of elegance and warmth.
        </p>
        <div className="hero-actions">
          <a href="#reservation" className="btn btn-primary">
            Book a Table
          </a>
          <a href="#menu" className="btn btn-outline">
            Explore Menu
          </a>
        </div>
      </div>

      <div className="hero-card">
        <div className="hero-card-top">
          <p className="eyebrow">Tonight's Special</p>
          <h3>Grilled Lamb Chops</h3>
          <p>Rosemary jus, roasted heirloom vegetables</p>
        </div>
        <div className="hero-card-price">
          <span>$34</span>
        </div>
        <div className="hero-stats">
          <div>
            <strong>120+</strong>
            <span>Signature dishes</span>
          </div>
          <div>
            <strong>4.9</strong>
            <span>Guest rating</span>
          </div>
          <div>
            <strong>15+</strong>
            <span>Years of craft</span>
          </div>
        </div>
      </div>
    </section>
  );
}
