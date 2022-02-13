import { useState } from 'react'
import './Card.css'

function Card({card}) {

    const [moreInfo, setMoreInfo] = useState(false)

    function showMore() {
        if (moreInfo) {
            setMoreInfo(false)
        } else {
            setMoreInfo(true)
        }
    }

    return ( 
       <div>
            <h1>{card.name}</h1>
            <p>Id: {card._id}</p>
            <p>Type: {card.type}</p>
            <p>Significado up: {card.meaning_up}</p>
            <p>Significado reverso: {card.meaning_rev}</p>
            {moreInfo && <p> Descrição: {card.desc}</p>}
            <button onClick={showMore}>{moreInfo ? <p>fechar</p> : <p>ler mais</p>}</button>              
       </div>
        
    );
}

export default Card;