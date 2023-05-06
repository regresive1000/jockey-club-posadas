import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    
    <header className="row header d-flex justify-content-between fixed-top logo-port-sm">
        
        <div className="img-logo-div col-0 col-lg-2 d-none d-lg-flex justify-content-center align-items-center">
            <Link to={"/#"}>
                <img className="img-logo d-none d-lg-block" src={logo} alt="logo" />
            </Link>
        </div>
    

        <nav className="navbar navbar-expand-lg col-4 col-lg-8 p-0 d-flex justify-content-center text-center">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse links-collapsed" id="navbarText">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/#quienes-somos'} className="nav-link" aria-current="page">
                                Quienes Somos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"#como-llegar"} className="nav-link" aria-current="page">
                                Como Llegar
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  to={"#actividades"} className="nav-link" aria-current="page">
                                Actividades
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"#institucional"} className="nav-link" aria-current="page">
                                Institucional
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>


        <div className=" img-logo-div col-3 col-lg-0 d-flex d-lg-none d-flex justify-content-center align-items-center">
            <Link to={"/#"}>
                <img src={logo} alt="logo de jockey club" />
            </Link>
            <a href="#">
                <img className="img-logo" src={logo} alt="logo" />
            </a>
        </div>

    
        <div className="col-4 col-lg-2 d-flex justify-content-end justify-content-lg-center align-items-center">
            <Link  to={"#contactanos-form"} className="boton-contactanos btn btn-primary">
                Contactanos
            </Link>
        </div>
    
    </header>
  )
}

export default Header