import './LoginForm.css';


interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <div className='login-container'>
        <div className='login-logo'>
            <h2 className="mt-0 mb-0">Community<span className="text-primary fw-bold mt-0 mb-0">Hub</span></h2>
        </div>
        <div className="login-form">
        <form>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Correo Electronico</label>
            <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="mail@example.com"
            />
            <small id="emailHelp" className="form-text text-muted">
            Nunca compartiremos su correo electrónico con nadie más.
            </small>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="**********"
            />
            </div>
            <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
                Recordar Contraseña
            </label>
            </div>
            <div className='login-button'>
                <button type="submit" className="btn btn-secondary">
                Registrar
                </button>
                <button type="submit" className="btn btn-primary">
                Iniciar Sesión
                </button>
          </div>
        </form>
        </div>
    </div>
  );
};

export default LoginForm;
