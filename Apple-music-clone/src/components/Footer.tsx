const Footer = () => {
  return (
    <footer className="footer-container mt-5 pb-5 px-4">
      <div className="footer-languages mb-3">
        <span className="me-2 border-end pe-2">Italia</span>
        <span className="text-secondary">English (UK)</span>
      </div>

      <div className="footer-copyright mb-2">
        Copyright © 2024 <span className="fw-bold">Apple Inc.</span> Tutti i diritti riservati.
      </div>

      <div className="footer-links d-flex flex-wrap gap-2">
        <a href="#">Condizioni dei servizi internet</a>
        <span className="divider">|</span>
        <a href="#">Apple Music e privacy</a>
        <span className="divider">|</span>
        <a href="#">Avviso sui cookie</a>
        <span className="divider">|</span>
        <a href="#">Supporto</a>
        <span className="divider">|</span>
        <a href="#">Feedback</a>
      </div>
    </footer>
  );
};

export default Footer;
