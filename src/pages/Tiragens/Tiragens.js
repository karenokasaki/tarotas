
import axios from 'axios'
import uniqid from 'uniqid'
import Search from '../../components/Search'



function Tiragens({ tiragens, setIsLoading }) {

    async function handleDelete(event) {
        try {
            setIsLoading(true)
            await axios.delete(`https://ironrest.herokuapp.com/tarotasInput/${event.target.name}`)
            console.log('apagado')
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='tiragens' key={uniqid()}>
        <Search />
            {tiragens.map((tiragem) => {
                return (
                    <div className='tiragem' key={uniqid()}>
                        {Object.keys(tiragem).map((key) => {
                            return (
                                <div key={uniqid()}>
                                    <div key={uniqid()}>{key}: {tiragem[key]}</div>

                                </div>
                            )
                        })}


                        <button key={uniqid()}>Editar</button>
                        <button key={uniqid()} onClick={handleDelete} name={tiragem._id}>Excluir!</button>
                    </div>
                )
            }).reverse()}
        </div>
    );
}

export default Tiragens;