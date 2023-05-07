import imagen from '/quienes-somos.png'

const QuienesSomos = () => {
  return (
    <section className="quienes-somos row d-flex justify-content-between justify-content-lg-evenly justify-content-xl-center " id="quienes-somos">
        <div className="img-div-quienes-somos col-12 col-md-6 col-lg-5 col-lg-4 d-flex justify-content-center align-items-center">
            <img src={imagen} alt="" />
        </div>

        <div className="quienes-somos-text col-12 col-md-6 col-lg-5 d-flex justify-content-center align-items-center flex-column">
            <h2 className="subtitles-h2">¿Quienes Somos?</h2>
            <p>Company we are proud to deliver hight quality standarts. In natural enviroment production, delivery and flexibility. organic bio oil a special production from our farm. </p>
        </div>
        <span id="actividades-hashlink"></span>
    </section>
  )
}

export default QuienesSomos