import { useEffect, useState } from 'react';
import axios from 'axios';

const Mensajes = () => {

    const [mensajes, setMensajes] = useState();

    useEffect(() => {
        const url = `${import.meta.env.VITE_BACKEND_URL}mensajes`
        console.log(url)
        const reqMensajes = async () => {
            try {
                await axios.get(url)
                    .then( res => {
                        setMensajes(res.data)
                        console.log(mensajes)
                    });
                
            } catch (error) {
                console.log(error)
            }
        }
        reqMensajes();
    }, [])

    async function eliminarMensaje(data, evt) {
        const id = data._id;
        console.log(id);
        const url = `${import.meta.env.VITE_BACKEND_URL}mensajes/${id}`;
        
        try {
            await axios.delete(url)
                .then( res => {
                    console.log(res)
                    evt.target.parentElement.remove();
                });
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='container-fluid p-2 mensajes-seccion'>
        <h2 className='text-center mb-3'>Mensajes</h2>
        <div className='mensajes row'>

            <div className='mensaje col-4'>
                <h4>Nombre</h4>
                <h5 className='mb-3'>mail</h5>
                <p>Mensaje Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur culpa aperiam cupiditate deserunt dolorum vero! Repellendus qui, molestias quidem rerum consectetur error impedit ipsa.</p>
                <button className='btn btn-secondary'>Borrar Mensaje</button>
            </div>

            { mensajes ? mensajes.map(mensaje => (
                <div key={mensaje._id} className='mensaje col-4'>
                    <h4>{mensaje.nombre}</h4>
                    <h5 className='mb-3'>Email: <b>{mensaje.email}</b></h5>
                    <p>{mensaje.mensaje}</p>
                    <button className='btn btn-secondary' onClick={ evt => {eliminarMensaje(mensaje, evt)}}>Borrar Mensaje</button>
                </div>
            )) : ""}

           
        </div>
    </div>
  )
}

export default Mensajes