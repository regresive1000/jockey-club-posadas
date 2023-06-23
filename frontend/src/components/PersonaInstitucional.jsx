

const PersonaInstitucional = ({ nombre, posicion, img }) => {
  return (
    <div className={`tarjeta col-12 col-sm-4 col-lg-3 d-flex justify-content-sm-evenly justify-content-between`}>
          <img className={`tarjetaImg`} src={img} alt="" />
          <div className='d-flex flex-column justify-content-center'>
            <p className={`tarjetaNombre name-institucional`}>{nombre}</p>
            <p className={`tarjetaCargo text-mute`}>{posicion}</p>
          </div>
    </div>
  )
}

export default PersonaInstitucional