import musicLogo from "../assets/logos/music.svg";

const Sidebar = () => {
  return (
    <aside className="col-md-2 d-none d-md-block sidebar py-3 px-4">
      {/* Logo Apple Music */}
      <div className="sidebar-logo mb-4">
        <img src={musicLogo} alt="Apple Music Logo" className="img-fluid" style={{ width: "100px" }} />
      </div>

      {/* Barra di ricerca */}
      <div className="search-container mb-4">
        <div className="input-group input-group-sm">
          <span className="input-group-text bg-dark border-0">
            <i className="bi bi-search text-secondary"></i>
          </span>
          <input type="text" placeholder="Cerca" className="form-control bg-dark border-0 text-white" />
        </div>
      </div>

      {/* Navigazione */}
      <ul className="nav flex-column ">
        <li className="nav-item">
          <a href="#" className="nav-link-custom">
            <i className="bi bi-house-door-fill"></i> Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link-custom">
            <i className="bi bi-grid-fill"></i> Novità
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link-custom">
            <i className="bi bi-broadcast"></i> Radio
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
