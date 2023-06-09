import Mail from '../models/Mail.js'

const enviarMail = async (req, res) => {

    const { post } = req.body 
    
    try {
        // Generar un nuevo mail
        const mail = new Mail(post);
        // Guardar el mail
        const mailGuardado = await mail.save();
        
    } catch (error) {
        res.json({msj: error.message})
        return;
    }

    res.json({msj: 'Mail enviado correctamente'});
}

const leerMensajes = async (req, res) => {
    try {
        const mensajes = await Mail.find();
        res.json( mensajes )
    } catch (error) {
        res.json({msj: error.message})
        return;
    }
}

const eliminarMensaje = async (req, res) => {
    console.log(req.params.id)
    const id = req.params.id;
    try {
        await Mail.deleteOne( { _id: req.params.id } );
        res.json({ msj: "Mensaje eliminado con exito" })
    } catch (error) {
        console.log(error)    
    }
}

export {
    enviarMail,
    leerMensajes,
    eliminarMensaje
}