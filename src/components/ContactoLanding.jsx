const ContactoLanding = () => {
  return (
    <section className="row form-contactanos">
        <div className="foto-contactanos col-12 col-lg-6 text-center">
            <h2 className="subtitles-h2 contactanos-h2">Envíanos tu Pregunta</h2>
            <p className="contactanos-p">Nuestro Soporte te Respondera en la Brevedad</p>
        </div>
        <div className="formdiv-contactanos col-12 col-lg-6">
            <form className="mb-5">
                <label className="form-label" htmlFor="nombre-apellido-form">Nombre:</label>
                <input className="form-control mb-4" type="text" id="nombre-apellido-form" placeholder="Ingresa tu Nombre" />
                
                <label className="form-label" htmlFor="email-form">Email</label>
                <input className="form-control mb-4" type="email" id="email-form" placeholder="Ingresa tu Email" />

                
                <label htmlFor="consulta-form">Consulta:</label>     
                <textarea className="form-control mt-2 mb-5" name="consulta-form" placeholder="Envianos tu Consulta" id="consulta-form"></textarea>
                
                
                <div className="submit-form">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>

            <div className="numero-telefono-form">
                <p className="llamanos-numero-form">O Llamanos a Nuestro Numero de Telefono:</p>
                <div>
                    <p className="bold">9999 - 999999</p>
                    <p className="bold">9999 - 999999</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactoLanding