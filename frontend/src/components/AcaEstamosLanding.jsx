
const AcaEstamosLanding = () => {
  return (
    <section className="aca-estamos row no-gutters d-flex justify-content-evenly" >
        <div className="direccion-club col-12 col-lg-4 d-flex justify-content-evenly align-items-center align-items-md-start flex-column flex-sm-row flex-lg-column text-center row">
            <h2 className="subtitles-h2 h2-aca-estamos text-center col-12 col-sm-6 col-lg-12">¡Aca Estamos!</h2>

            <div className="columna-direccion-y-boton col-12 col-sm-6 col-lg-12">
                <div className="aca-estamos-text text-center">
                    <p>Km 12</p>
                    <p>Ruta 12</p>
                    <p>Posadas</p>
                    <p>Misionas</p>
                </div>
    
                <a className="btn btn-primary" href="https://www.google.com.ar/maps/place/Hip%C3%B3dromo+General+Belgrano/@-27.4122184,-56.0113971,14.83z/data=!4m6!3m5!1s0x9457bdbc59b7b2a1:0x24c21628fe481b92!8m2!3d-27.4124126!4d-56.0060233!16s%2Fg%2F11lt00lzgp" target="_blank">Seguir en Maps</a>

            </div>
        </div>

        <div className="col-12 col-lg-4 d-flex justify-content-evenly align-items-center flex-column">
            <iframe id="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15992.075649572485!2d-56.01139707722303!3d-27.412218401298365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457bdbc59b7b2a1%3A0x24c21628fe481b92!2sHip%C3%B3dromo%20General%20Belgrano!5e0!3m2!1ses-419!2sar!4v1682970246233!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <span id="contactanos-form"></span>
    </section>
  )
}

export default AcaEstamosLanding