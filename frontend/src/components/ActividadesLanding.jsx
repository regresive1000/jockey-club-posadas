import pato from '/patow.jpg'
import salto from '/salto.jpg'
import endurance from '/endurance.jpg'
import equitacion from '/equitacion.jpg'
import polo from '/polo.jpg'

const ActividadesLanding = () => {
  return (
    
    
    <section className="row no-gutters actividades-club d-flex justify-content-center" >

        

        <h2 className="subtitles-h2 col-12">Actividades del Club</h2>
        <div className="col-12 col-lg-8 row actividades-club-divs d-flex justify-content-center">
        

            <div className="actividades-deportes pato-modal col-12 col-sm-6 col-xl-6" data-bs-toggle="modal" data-bs-target="#pato-modal">
                <div>
                    <img src={pato} alt="" />
                </div>
                <p className="title-actividad-pato">Pato</p>
            </div>
            <div className="modal fade" id="pato-modal" tabIndex="-1" aria-labelledby="pato-modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="pato-modal">Pato</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img className="img-modal mb-4" src={pato} alt="" />
                        
                    
                        <p>El pato fue denominado como “deporte nacional” en 1953. Su objetivo, precisamente, es embocar el "pato" en el aro del equipo adversario.</p>
                        <hr />
                        <p> Para mas información de <span className="modal-bold-span">horarios comunicarse con el club mas abajo</span> </p>
                        
                       
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                     
                    </div>
                  </div>
                </div>
            </div>




            <div className="actividades-deportes salto-modal col-12 col-sm-6 col-xl-6" data-bs-toggle="modal" data-bs-target="#salto-modal">
                <div>
                    <img src={salto} alt="" />
                </div>
                <p className="title-actividad-salto">Salto</p>
            </div>
            <div className="modal fade" id="salto-modal" tabIndex="-1" aria-labelledby="salto-modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="salto-modal">Salto</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img className="img-modal mb-4" src={salto} alt="" />
                        
                        <p>Es un deporte que permite el contacto con la naturaleza, ya que se practica en el exterior, y fomenta la comunicación con los caballos.</p>
                        <hr />
                        <p> Para mas información de <span className="modal-bold-span">horarios comunicarse con el club mas abajo</span> </p>
                       
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                     
                    </div>
                  </div>
                </div>
            </div>


            <div className="actividades-deportes polo-modal col-12 col-sm-6 col-xl-4" data-bs-toggle="modal" data-bs-target="#polo-modal">
                <div>
                    <img src={polo} alt="" />
                </div>
                <p className="title-actividad-polo">Polo</p>
            </div>
            <div className="modal fade" id="polo-modal" tabIndex="-1" aria-labelledby="polo-modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="polo-modal">Polo</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img className="img-modal mb-4" src={polo} alt="" />
                        
                        <p>Llegó al territorio argentino en 1875. El objetivo es golpear una pelota de madera con un mazo y llevarla hasta la portería del rival.</p>
                        <hr />
                        <p> Para mas información de <span className="modal-bold-span">horarios comunicarse con el club mas abajo</span> </p>
                       
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                     
                    </div>
                  </div>
                </div>
            </div>


            <div className="actividades-deportes equitacion-modal col-12 col-sm-6 col-xl-4" data-bs-toggle="modal" data-bs-target="#equitacion-modal">
                <div>
                    <img src={equitacion} alt="" />
                </div>
                <p className="title-actividad-equitacion">Equitación</p>
            </div>
            <div className="modal fade" id="equitacion-modal" tabIndex="-1" aria-labelledby="equitacion-modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="equitacion-modal">Equitación</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img className="img-modal mb-4" src={equitacion} alt="" />
                        
                        <p>Es el arte de mantener el control preciso sobre un caballo, así como los diferentes modos de manejarlo.</p>
                        <hr />
                        <p> Para mas información de <span className="modal-bold-span">horarios comunicarse con el club mas abajo</span> </p>
                        
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                     
                    </div>
                  </div>
                </div>
            </div>

            <div className="actividades-deportes endurance-modal col-12 col-sm-6 col-xl-4" data-bs-toggle="modal" data-bs-target="#endurance-modal">
                <div>
                    <img src={endurance} alt="" />
                </div>
                <p className="title-actividad-endurance">Endurance</p>
                {/* <p className="text-mute">Deportes Escuestres</p> */}
            </div>
            <div className="modal fade" id="endurance-modal" tabIndex="-1" aria-labelledby="endurance-modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="endurance-modal">Endurance</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img className="img-modal mb-4" src={endurance} alt="" />
                        
                        <p>Es un deporte de resistencia cronometrado sobre una ruta marcada. En este deporte se pone a prueba la velocidad, habilidad y la resistencia física y psicológica de caballo y jinete, ya que ambos deben recorrer grandes distancias en un día, a través de los más diversos terrenos y contra reloj.</p>
                        <hr />
                        <p> Para mas información de <span className="modal-bold-span">horarios comunicarse con el club mas abajo</span> </p>

                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                     
                    </div>
                  </div>
                </div>
            </div>

            <span id="como-llegar"></span>
        </div>
    </section>
  )
}

export default ActividadesLanding