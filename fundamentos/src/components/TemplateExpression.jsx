// Atalho para criar o projeto: RAFCE


const name = 'Sophia'
const dados = {
    idade: 16,
    trabalho: 'estudante'
}
//Arrey de strings
const skills = ["React", "C#", "JS", "HTML"]

const projects = [
{name: "Portifólio", tech: "React + css", status: "finalizado"},
{name: "Lista de tarefas", tech: "Javascript", status: "Em andamento"}

]

const TemplateExpression = () => {
  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <p>Seu nome é {name}</p>
        <p>Sua idade é {dados.idade} anos e você é um {dados.trabalho}</p>

        {/* Usando o length que informa quantos intens tem */}
        <p>Você tem {skills.length} habilidades</p>

        <h4>Habilidades</h4>

        <ul>
            {skills.map((skill) => {
                <li key={skill}>{skill}</li>
          })}
        </ul>

        <h4>Projetos</h4>
        <ul>
            {projects.map((project) => {
                 <li key={project.name}>
                    ({project.name} - {project.tech} - {project.status})
                 </li>
            })}
        </ul>
    </div>
  )
}

export default TemplateExpression