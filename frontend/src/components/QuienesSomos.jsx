import imagen from '/quienes-somos.png'

const QuienesSomos = () => {
  return (
    <section className="quienes-somos no-gutters row d-flex justify-content-between justify-content-lg-evenly justify-content-xl-center " id="quienes-somos">
        <div className="img-div-quienes-somos col-12 col-md-6 col-lg-5 col-lg-4 d-flex justify-content-center align-items-center">
            <img src={imagen} alt="" />
        </div>

        <div className="quienes-somos-text col-12 col-md-6 col-lg-5 d-flex justify-content-center align-items-center flex-column">
            <h2 className="subtitles-h2">¿Quienes Somos?</h2>
            
            <p>El Jockey Club Posadas localizado en Rincón de Itaembé, desde los años ochenta luce sus completas instalaciones para la realización de actividades hípicas; con su elíptica y pista de carreras adaptada para todas las distancias.<b> En la actualidad</b> suma en el interior de la misma la posibilidad de realizar un conjunto de actividades ecuestres, permitiendo que quienes aman este noble ejemplar que es el caballo, puedan gozarlo en todas sus posibilidades.  </p>
        </div>
        <span id="actividades-hashlink"></span>
    </section>
  )
}

export default QuienesSomos