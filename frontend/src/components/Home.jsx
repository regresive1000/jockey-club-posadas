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
                  <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1668036268112-543f0ae5f148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-carousel" alt="imagen del club" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1482779665037-990b5b461e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-carousel" alt="imagen del club" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1501879779179-4576bae71d8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="img-carousel" alt="imagen del club" />
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