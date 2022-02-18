
import axios from 'axios'
import uniqid from 'uniqid'
import SearchTiragem from '../../components/SearchTiragem'
import { useState } from 'react'


function Tiragens({ tiragens, setIsLoading }) {

    const [searchTiragem, setSearchTiragem] = useState('')

    

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
            <div className='m-5 flex flex-col mb-6 drop-shadow-md'>
                <SearchTiragem searchTiragem={searchTiragem} setSearchTiragem={setSearchTiragem} />
                <div className='flex flex-col ' key={uniqid()}>
                    {tiragens
                        .filter((tiragem) => {
                            return (tiragem.layoutName.toLowerCase()).includes(searchTiragem.toLowerCase())
                        })
                        .map((tiragem) => { //mostra todas as keyse values da tiragem
                        return (
                            <div key={uniqid()} className='mt-4 p-2 border-2 rounded-xl '>
                                {Object.keys(tiragem)
                                    .map((key) => {
                                        return (
                                            <div key={uniqid()}>
                                                <div key={uniqid()}><span className='text-sm text-gray-400 capitalize'>{key}:</span> <span className='text-lg'>{tiragem[key]}</span></div>
                                            </div>
                                        )
                                    })}
                                <button key={uniqid()} className='m-1 p-1 rounded-lg bg-amber-400 border-2 text-sm text-white w-16'>Editar</button>
                                <button key={uniqid()} onClick={handleDelete} name={tiragem._id} className='m-1 p-1 rounded-lg bg-red-400  border-2 text-sm text-white w-16'>Excluir!</button>
                            </div>
                        )
                    }).reverse()}
                </div>
            </div>
    );
}

export default Tiragens;