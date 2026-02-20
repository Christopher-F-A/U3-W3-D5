const Sidebar = () => {
  return (
    <aside className="col-md-2 d-none d-md-block sidebar">
      <div className="p-3">
        <input type="text" placeholder="Cerca" className="form-control form-control-sm mb-4" />

        <ul className="nav flex-column gap-3">
          <li className="nav-item active">Home</li>
          <li className="nav-item text-danger">Novità</li>
          <li className="nav-item">Radio</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
