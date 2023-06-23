import InstitucionalCSS from './css/Institucional.module.css';
import PersonaInstitucional from '../components/PersonaInstitucional';
import iconPersonaIMG from '/icon-persona.jpg'

const Institucional = () => {
  return (
    <article className={`${InstitucionalCSS.article} row`}>

      <h2 className='text-center subtitles-h2'>Institucional</h2>
        
      

      <PersonaInstitucional nombre={"Hugo José Sniechowsky"} posicion={"Presidente"} img={iconPersonaIMG} />
      <PersonaInstitucional nombre={"Martin Ayala"} posicion={"Secretario"} img={iconPersonaIMG} />
      <PersonaInstitucional nombre={"Hector Bottero"} posicion={"Tesorero"} img={iconPersonaIMG} />
      <PersonaInstitucional nombre={"Luis Enunciación"} posicion={"Vocal"} img={iconPersonaIMG} />
      <PersonaInstitucional nombre={"Raúl Fronciani"} posicion={"Vocal"} img={iconPersonaIMG} />

      
      


    </article>
  )
}

export default Institucional