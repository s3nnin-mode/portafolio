import { Link } from 'react-router-dom';
import '../stylesheet/inicio.scss';

export const Inicio = () => {
    return (
        <div className='seccion-sobre-mi'>
            <p className='montserrat texto-sobre-mi'>
                Hola! bienvenido a mi portafolio, soy una persona nueva en el mundo del desarrollo web (junior) 
                que cada dia trata de mejorar, estudiando de forma autodidacta y haciendo proyectos para reforzar lo aprendido.
            </p>
            <p className='montserrat texto-sobre-mi'>
                Actualmente me dedico a la construcción de interfaces bonitas, 
                funcionales e intituivas junto a tecnologias como html, css, javascript y bibliotecas como react.
                <br />
                La finalidad es simple: <span>generar una buena experiencia de usuario.</span>
                {/* <br></br>
                <br></br> */}
            </p>
            <p className='montserrat texto-sobre-mi'>
                Soy una persona que está en constante aprendizaje para mejorar 
                mis habilidades y estoy buscando oportunidades para crecer 
                profesionalmente <span>
                mientras aporto valor a los equipos en los que colabore.
                </span>
            </p>
            <p className='montserrat sugerencia'>
                Dirigete a la sección de <Link to='/proyectos'>Proyectos</Link> para ver algo de lo que he construido.
                Saludos! :)
            </p>
        </div>
    )
}