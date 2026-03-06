import classes from "..components/title.module.css"

//Usando o css que criamos 

const Title = () => {
  return (
    <div>
        <h2 className={classes.title}>Meu subtítulo</h2>
    </div>
  )
}

export default Title