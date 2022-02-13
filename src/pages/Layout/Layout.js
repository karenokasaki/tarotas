import { useParams, useNavigate } from 'react-router-dom'
import { useState} from 'react'
import uniqid from 'uniqid'
import './Layout.css'
import axios from 'axios'




function Layout({ layouts, setIsLoading }) {
    const params = useParams()
    const [user, setUser] = useState({})
    const [layoutName, setLayoutName] = useState()
    const [tiragem, setTiragem] = useState({})
    const [date, setDate] = useState()
    const [userFormOk, setUserFormOk] = useState(false)

    const navigate = useNavigate()

    function handleChange(event) { //faz o update do state de cada carta
        event.preventDefault()
        setTiragem({ ...tiragem, [event.target.parentElement[0].placeholder]: event.target.parentElement[0].value }) //passado:carta
        
    }

    function handleUser(event) { //botão do user -> ao clicar, update de states user layout and date
        event.preventDefault()
        setUser(event.target.value) //user: nome do user
        setLayoutName(event.target.id) //layout: nome do layout
        console.log('passou')
    }

    function handleSubmit(event) {  //btn salvar nome - junta todas as informações
        event.preventDefault()
        setTiragem({ ...tiragem, user, date, layoutName })
        setUserFormOk(true)

    }

    function handleDate(event) {
        setDate(event.target.value)
    }

    async function handleForm() {
        try {
            setIsLoading(true)
            await axios.post('https://ironrest.herokuapp.com/tarotasInput', tiragem)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
            navigate('/tiragens')
        }
    }

    return (
        <div>
            Pagina que vai mostrar o layout completo e é aqui que vai ter o form para adicionar uma tiragem!
            {layouts
                .filter((Layout) => {
                    return Layout._id.includes(params.idLayout)
                })
                .map((layout) => {
                    return (
                        <div key={layout._id}>
                            <img src={layout.img} alt="spread"></img>
                            <p>Nome do layout: {layout.name}</p>
                            <label>Digite seu nome</label>
                            <input
                                placeholder="Nome completo"
                                name={"user"}
                                id={layout.name}
                                onChange={handleUser}
                            />
                            <input
                                name='date'
                                type="date"
                                onChange={handleDate}
                            />
                            <button onClick={handleSubmit}>Salvar nome e data</button>

                            {console.log(Object.keys(layout))}
                            {
                            userFormOk && <div>
                                    <p>Inserir as cartas na ordem apresentada:</p>
                                    {layout.layout.map((currentLayout) => {
                                        return (
                                            <div key={uniqid()}>
                                                <form name={`${currentLayout.name}`} >
                                                    <input
                                                        placeholder={currentLayout}
                                                        name={currentLayout.name}
                                                    />
                                                    <button type="button" name={`${currentLayout.name}`} onClick={handleChange}>save</button>
                                                </form>
                                            </div>
                                        )
                                    })}
                                    {(Object.keys(tiragem).length) >= 6 && <button onClick={handleForm}>Enviar Tiragem! </button>}
                                </div>
                            }
                        </div>

                    )
                })}
        </div>);
}

export default Layout;