import { useState, useEffect } from "react";
import axios from 'axios';

const ContactoLanding = () => {

    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [post, setPost] = useState({});
    const [postSend, setPostSend] = useState(null);


    useEffect(() => {
        setPost({
            email,
            nombre,
            mensaje
        })
    }, [email, nombre, mensaje])

    function msjSucces() {
        const msjExito = document.querySelector('.parrafo');
        msjExito.style.opacity = 1;
        setTimeout(() => {
            msjExito.style.opacity = 0;
        }, 5000)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setPostSend(false)

        if(email === '' || mensaje === '' || nombre === '') {
            return alert('Todos los campos deben estar completos')
        }

        msjSucces();

        const url = import.meta.env.VITE_BACKEND_URL

        try {
            await axios.post(url, { post })
            .then(res => {
            })
        } catch (error) {
            console.log(error)
            alert('Hubo un error con el servidor, puede comunicarse por este numero: (351) 212-3814')
            return
        }
        msjSucces();
        setPostSend(true)

    }


  return (
    <section className="row no-gutters form-contactanos">
        <div className="foto-contactanos col-12 col-lg-6 text-center">
            <h2 className="subtitles-h2 contactanos-h2">Envíanos tu Pregunta</h2>
            <p className="contactanos-p">Nuestro Soporte te Respondera en la Brevedad</p>
        </div>
        <div className="formdiv-contactanos col-12 col-lg-6">
            <form className="mb-5" onSubmit={ (e) => handleSubmit(e) }>
                <label className="form-label" htmlFor="nombre-apellido-form">Nombre:</label>
                <input className="form-control mb-4" type="text" id="nombre-apellido-form" placeholder="Ingresa tu Nombre" onChange={ (e) => {setNombre(e.target.value)} } />
                
                <label className="form-label" htmlFor="email-form">Email</label>
                <input className="form-control mb-4" type="email" id="email-form" placeholder="Ingresa tu Email" onChange={ (e) => {setEmail(e.target.value)} } />

                
                <label htmlFor="consulta-form">Consulta:</label>     
                <textarea className="form-control mt-2 mb-5" name="consulta-form" placeholder="Envianos tu Consulta" id="consulta-form" onChange={ (e) => { setMensaje(e.target.value) } } />
                
                
                <div className="submit-form">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>

            

            <div className={`mensajeparrafo parrafo text-center mb-3 bold`}>
                    {postSend ?
                        `Mensaje Enviado Correctamente 👏` 
                        : <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
            </div>


            <div className="numero-telefono-form">
                <p className="llamanos-numero-form">O Llamanos a Nuestro Numero de Telefono:</p>
                <div>
                    <p >Hector Botero <span className="bold">(351) 212-3814</span></p>
                    <p className="bold d-none">9999 - 999999</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactoLanding