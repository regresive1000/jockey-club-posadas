import express from "express";
import { enviarMail, leerMensajes, eliminarMensaje } from '../controllers/landingController.js'

const router = express.Router();

// Envio de formulario
router.post('/', enviarMail);

// Mensajes
router.get('/mensajes', leerMensajes);
router.delete('/mensajes/:id', eliminarMensaje);



export default router;