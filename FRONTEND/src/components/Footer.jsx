export default function Footer() {
  return (
    <footer className="footer">
      <p className="brand">Bella&nbsp;<span>Cucina</span></p>
      <p className="footer-tagline">Fine dining, unforgettable moments.</p>
      <p className="footer-copy">
        © {new Date().getFullYear()} Bella Cucina. All rights reserved.
      </p>
    </footer>
  );
}
