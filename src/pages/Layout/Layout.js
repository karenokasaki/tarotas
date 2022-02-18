import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import uniqid from 'uniqid'
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
        event.target.style = 'white'
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
        <>
            {layouts
                .filter((Layout) => {
                    return Layout._id.includes(params.idLayout)
                })
                .map((layout) => {
                    return (
                        <div key={layout._id} className='flex flex-col m-2 p-3 items-center'>
                            <img src={layout.img} alt="spread"></img>
                            <p>Layout: {layout.name}</p>
                            <div className='flex'>
                                <input
                                    placeholder="Nome completo"
                                    name={"user"}
                                    id={layout.name}
                                    onChange={handleUser}
                                    className='border rounded-md placeholder:italic mt-1 px-3 py-2 border border-slate-400 w-40'
                                />
                                <input
                                    name='date'
                                    type="date"
                                    onChange={handleDate}
                                    className='border rounded-md placeholder:italic mt-1 px-3 py-2 border border-slate-400 w-40 ml-4'
                                />
                            </div>
                            <button onClick={handleSubmit} className='m-2 p-2 bg-neutral-600 rounded-lg drop-shadow-md border text-white'>Salvar nome e data</button>

                            {console.log(Object.keys(layout))}
                            {
                                userFormOk && <div className='flex flex-col items-center text-slate-400 mb-8'>
                                    <p>Salvar uma carta por vez:</p>
                                    {layout.layout.map((currentLayout) => {
                                        return (
                                            <div key={uniqid()}>
                                                <form name={`${currentLayout.name}`} >
                                                    <input
                                                        placeholder={currentLayout}
                                                        name={currentLayout.name}
                                                        className='border rounded-md placeholder:italic mt-1 px-3 py-2 border border-slate-400'
                                                    />
                                                    <button type="button" name={`${currentLayout.name}`} onClick={handleChange} className='m-2 p-2 bg-neutral-600 rounded-lg drop-shadow-md border text-white'>Salvar</button>
                                                </form>
                                            </div>
                                        )
                                    })}
                                    {(Object.keys(tiragem).length) >= 6 && <button onClick={handleForm} className='flex m-3 p-3 bg-amber-400 rounded-lg drop-shadow-md border text-white justify-center font-bold'>Enviar Tiragem! </button>}
                                </div>
                            }
                        </div>

                    )
                })}
        </>);
}

export default Layout;