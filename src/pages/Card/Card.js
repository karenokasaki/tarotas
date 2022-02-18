import { useState } from 'react'
/* import {Link, Navigate, useNavigate} from 'react-router-dom' */


function Card({ card, setSearch }) {
    /* const navigate = useNavigate() */
    const [moreInfo, setMoreInfo] = useState(false)
    const [ingles, setIngles] = useState(true)

    function showMore() {
        if (moreInfo) {
            setMoreInfo(false)
            setSearch('')
        } else {
            setMoreInfo(true)
        }
    }

    function handleTraducao() {
        if (ingles) {
            setIngles(false)
        }
        if (!ingles) {
            setIngles(true)
        }
    }

    return (
        <div className='flex flex-col text-center leading-relaxed '>
            <h1 className='text-xl font-bold p-3'>{card.name}</h1>
            <p>{card.meaning_up}</p>
            {moreInfo &&
                <div>
                    <button id='legenda'className='m-1 p-1 rounded-lg bg-teal-400 border-2 text-sm text-white w-24' onClick={handleTraducao}>{ingles ? `Tradução` : `Inglês`}</button>
                    <p><span className='text-lg text-gray-400'>Descrição:</span>{ingles && card.desc} {!ingles && card.traducao}</p>
                    <p><span className='text-lg text-gray-400'>Significado reverso: </span>{card.meaning_rev}</p>
                    <p><span className='text-lg text-gray-400'>Type: </span>{card.type}</p>
                    {/* <Link to={`/edit/${card._id}`} className='border border-slate-300 w-12 rounded-lg bg-teal-500 text-white p-1'>Editar</Link>   */}
                </div>}
            <div className='flex justify-end'>
                <button onClick={showMore} className='flex text-center w-auto justify-end'>{
                    moreInfo ?
                        <p className='border w-20 rounded-lg bg-amber-400 text-neutral-600'>fechar</p>
                        :
                        <p className='border border-slate-300 w-20 rounded-lg bg-amber-400 text-neutral-600'>Ler mais</p>}</button>
            </div>    
        </div >



    );
}

export default Card;