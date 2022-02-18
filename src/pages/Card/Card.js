import { useState } from 'react'

function Card({ card, setSearch }) {

    const [moreInfo, setMoreInfo] = useState(false)

    function showMore() {
        if (moreInfo) {
            setMoreInfo(false)
            setSearch('')
        } else {
            setMoreInfo(true)
        }
    }

    return (
        <div className='flex flex-col text-center leading-relaxed '>
            <h1 className='text-xl font-bold p-3'>{card.name}</h1>
            <p>{card.meaning_up}</p>
            {moreInfo &&
                <div>
                    <p>Descrição: {card.desc}</p>
                    <p>Significado reverso: {card.meaning_rev}</p>
                    <p>Type: {card.type}</p>
                </div>}
            <button onClick={showMore} className='flex text-center w-auto justify-end'>{
                moreInfo ? <p className='border w-24 rounded-lg bg-amber-400 text-neutral-600'>fechar</p> : <p className='border border-slate-300 w-24 rounded-lg bg-amber-400 text-neutral-600'>Ler mais</p>}</button>
        </div>

    );
}

export default Card;