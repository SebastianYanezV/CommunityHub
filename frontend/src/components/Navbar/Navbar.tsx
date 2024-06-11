import './Navbar.css';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white shadow">
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="d-flex fw-bold fs-1">
                <p className="mt-0 mb-0">Community</p>
                <p className="text-primary fw-bold mt-0 mb-0">Hub</p>
            </span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerHome"
            aria-controls="navbarTogglerHome" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerHome">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link text-dark fw-medium pb-0" href="#">¿Quiénes somos?</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark fw-medium pb-0" href="#">Precio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark fw-medium pb-0" href="#">Nuestros servicios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark fw-medium pb-0" href="#">Contacto</a>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li>
                    <button className="btn btn-secondary rounded-pill text-white fw-medium me-2 mb-2 mb-lg-0"
                        type="submit">
                        Iniciar Sesión
                    </button>
                </li>
                <li>
                    <button className="btn btn-secondary rounded-pill text-white fw-medium me-2 mb-2 mb-lg-0"
                        type="submit">
                        Registrarse
                    </button>
                </li>
            </ul>
        </div>
    </div>
</nav>
  );
};

export default Navbar;
