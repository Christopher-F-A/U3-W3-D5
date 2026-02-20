const Sidebar = () => {
  return (
    <aside className="d-none d-md-block col-md-2 bg-dark text-light p-3 vh-100">
      <ul className="nav flex-column gap-2">
        <li className="nav-item">Home</li>
        <li className="nav-item">Novità</li>
        <li className="nav-item">Radio</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
