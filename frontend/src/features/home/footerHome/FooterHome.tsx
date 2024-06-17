import './FooterHome.css';

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
        <div className="container-fluid p-5">
            <div className="row flex-wrap-reverse justify-content-between">
                <div className="col-md-6">
                    <span className="d-flex fw-bold fs-1">
                        <p className="mt-0 mb-0">Community</p>
                        <p className="text-primary fw-bold mt-0 mb-0 custom-teal">Hub</p>
                    </span>
                    <p className="lh-sm">En Community Hub, entendemos la importancia de una administración diligente y
                        transparente en condominios y edificios. Trabajamos para mejorar la eficiencia, seguridad y
                        orden en cada proceso, promoviendo una convivencia armoniosa y elevando la calidad de vida en
                        las comunidades que gestionamos. Tu satisfacción es nuestra prioridad.</p>
                    <p>CommunityHub &copy; 2024 - Todos los derechos reservados.</p>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                    <p className="fw-bold fs-4">Páginas</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a className="text-decoration-none fw-medium" href="#">¿Quiénes
                                somos?</a></li>
                        <li className="list-group-item"><a className="text-decoration-none fw-medium" href="#">Precios</a></li>
                        <li className="list-group-item"><a className="text-decoration-none fw-medium" href="#">Nuestros
                                Servicios</a></li>
                        <li className="list-group-item"><a className="text-decoration-none fw-medium" href="#">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
