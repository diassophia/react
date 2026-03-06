import React from 'react'
import './gallery.css'

const Gallery = () => {
    const projetos = [
        {
            id: 1,
            nome: "Calculadora IMC",
            description: "Plataforma que calcula o IMC",
            techs: ["React"],

        },
    
{
         id: 2,
            nome: "TCC dev",
            description: "Projeto de conclusão de curso- DEV",
            techs: ["React", "C#", "Html", "CSS"],
},

{
        id: 3,
            nome: "E-commerce C#",
            description: "Plataforma completa com sistema de login e Autentificação",
            techs: ["React ", "C#"],

},


    ]



  return (
    <section className='gallery-section' id='projects'>
<h2 className='section-title'>Projetos</h2>
<div className='gallery-grid'>
{projetos.map((projeto) => (
    <div key={projeto.id}
    className='card'>

        <div className='card-header'>
            <div className='dot red'></div>
            <div className='dot yellow'></div>
            <div className='dot green'></div>
            </div>

        <div className='card-content'>
           <span className='card-tag'>const Projetos=</span>
<h3 className='card-title'>{projeto.nome}</h3>
<p className='card-text'>{projeto.description}</p>
{/*Atalho para organizar codigo: Shift + Alt + P*/}


<div className='card-techs-stack'>
{projeto.techs.map((tech) => (
    <span key={tech} 
    className='tech-item'>
        {tech}
    </span>
))}

</div>

            </div>
        </div>
))}

</div>
    </section>
  )
}

export default Gallery