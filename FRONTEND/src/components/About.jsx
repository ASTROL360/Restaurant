export default function About() {
  const features = [
    {
      title: "Farm to Table",
      desc: "We source from trusted local farms to guarantee the freshest flavors on every plate.",
    },
    {
      title: "Award-Winning Chefs",
      desc: "Our culinary team brings decades of experience and a passion for modern cuisine.",
    },
    {
      title: "An Intimate Setting",
      desc: "Candlelit ambiance and attentive service make every evening feel special.",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-text">
        <p className="eyebrow">Our Story</p>
        <h2>Where passion meets the plate</h2>
        <p className="about-lead">
          For over 15 years, Bella Cucina has been a home for food lovers. What
          began as a small family kitchen is now a beloved destination, rooted
          in the same love for honest, beautiful food.
        </p>

        <div className="feature-list">
          {features.map((feature) => (
            <div className="feature" key={feature.title}>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-visual">
        <div className="about-quote">
          <p>
            “Food is our common ground, a universal experience. We make every
            plate a story worth telling.”
          </p>
          <span>— Chef Isabella Rossi</span>
        </div>
      </div>
    </section>
  );
}
