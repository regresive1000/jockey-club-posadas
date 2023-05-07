import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="row footer-landing">
        <div className="col-12 col-lg-4"></div>
        <div className="footer-div-ul-links mb-2 col-12 col-lg-4">
            <ul className="ul-footer d-none d-sm-flex flex-column flex-sm-row justify-content-between align-items-center">
                <li>
                  <HashLink to={"/#quienes-somos"}>
                    Quienes Somos
                  </HashLink>
                </li>
                <li>
                  <HashLink to={"/#actividades-hashlink"}>
                    Actividades
                  </HashLink>
                </li>
                <li>
                  <HashLink to={"/#como-llegar"}>
                    Como Llegar
                  </HashLink>
                </li>
                <li>
                  <HashLink to={"/institucional"}>
                    Institucional
                  </HashLink>
                </li>
            </ul>
        </div>
        <div className="footer-div-p col-12 col-lg-4">
            <p>Todos los Derechos Reservados desde el 2023</p>
        </div>
    </footer>
  )
}

export default Footer