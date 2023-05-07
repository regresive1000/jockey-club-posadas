import logo from '/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Header = () => {

    const location = useLocation()
    const parametro = window.location.pathname;
    

  return (
    
    <header className="row no-gutters header d-flex justify-content-between fixed-top logo-port-sm">
        
        <div className="img-logo-div col-0 col-lg-2 d-none d-lg-flex justify-content-center align-items-center">
            <HashLink to={"/#"}>
                <img className="img-logo d-none d-lg-block" src={logo} alt="logo" />
            </HashLink>
        </div>
    

        <nav className="navbar navbar-expand-lg col-4 col-lg-8 p-0 d-flex justify-content-center text-center">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse links-collapsed" id="navbarText">
                    <ul className="navbar-nav">

                        {(parametro === '/institucional')
                            ?
                            (
                            <li className="nav-item">
                                <HashLink to={'/#'} className="nav-link" aria-current="page">
                                    Inicio
                                </HashLink>
                            </li>)
                            :   []
                        }
                        

                        <li className="nav-item">
                            <HashLink to={'/#quienes-somos'} className="nav-link" aria-current="page">
                                Quienes Somos
                            </HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink to={'/#actividades-hashlink'} className="nav-link" aria-current="page">
                                Actividades
                            </HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink to={"/#como-llegar"} className="nav-link" aria-current="page">
                                Como Llegar
                            </HashLink>
                        </li>

                        {(parametro !== '/institucional')
                            ?
                            (
                            <li className="nav-item">
                                <HashLink to={"/institucional"} className="nav-link" aria-current="page">
                                    Institucional
                                </HashLink>
                            </li>)
                            :   []
                        }
                        
                        
                    </ul>
                </div>

            </div>
        </nav>


        <div className=" img-logo-div col-3 col-lg-0 d-flex d-lg-none d-flex justify-content-center align-items-center">
            <HashLink to={"/#"}>
                <img className="img-logo" src={logo} alt="logo de jockey club" />
            </HashLink>
        </div>

    
        <div className="col-4 col-lg-2 d-flex justify-content-end justify-content-lg-center align-items-center">
            <HashLink  to={"/#contactanos-form"} className="boton-contactanos btn btn-primary">
                Contactanos
            </HashLink>
        </div>
    
    </header>
  )
}

export default Header