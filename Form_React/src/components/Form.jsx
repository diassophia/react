import { useState} from 'react'
import './Form.css'
const Form = () => {
    // 3 - Atuando com os estados das informações gerenciando os dados
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");



    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleBio = (e) => {
        setBio(e.target.value);
    }

    console.log(name, email)

    const handleSubmit = (e) => {
        e.preventDefault();

        //Limpar após enviar os dados
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

  return (
    <div>
        {/* 1 - Criando o Form */}
        <form onSubmit={handleSubmit}>
            <div>
                {/* 2 - Ciando os labels e inputs */}
                <label htmlFor="Name">Nome:</label>
                <input type="text" name="Name" placeholder="Digite seu nome:" onChange={handleName} value={name}/>

                {/* 3 - label envolvendo input */}
                <label>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="Email" placeholder="Digite seu email:" onChange={handleEmail} value={email}/>
                </label>
            </div>

            {/* 6 - Biografia desse usuário */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Descrição do usuário" onChange={handleBio} value={bio}></textarea>
            </label>

            {/* 7 - Nível desse usuário (Admin, Padrão ou Edição) */}
            <label>
                <span>Função do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}></select>
                <option value="user">Padrão</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Form