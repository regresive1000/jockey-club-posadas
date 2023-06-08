import home1 from '/home-1.png'
import home2 from '/home-2.jpg'
import home3 from '/home-3.jpg'

const Home = () => {
  return (

    <section className="row no-gutters home text-center">

        <div className="col p-0">
            <h1 className="h1-home">Jockey Club Posadas</h1>
            <div className="text-mute eslogan-home">
                <p className="m-0">En el corazón de nuestra ciudad</p>
            </div>
    
            <p className="info-home mb-1 mb-sm-4">Con actividades desde Pato, Equitación, Polo, Salto, Endurance (Deportes Ecuestres)</p>
    
            <div id="carousel-home" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item">
                    <img src={home2} className="img-carousel" alt="imagen del club" />
                  </div>
                  <div className="carousel-item">
                    <img src={home1} className="img-carousel" alt="imagen del club" />
                  </div>
                  <div className="carousel-item active">
                    <img src={home3} className="img-carousel" alt="imagen del club" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel-home" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel-home" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

        </div>

    </section>

  )
}

export default Home