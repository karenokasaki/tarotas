import { useState } from 'react'
import './Card.css'

function Card({card, setSearch}) {

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
       <div>
            <h1>{card.name}</h1>
            <p>Significado up: {card.meaning_up}</p>
            {moreInfo && 
                <div>
                    <p> Descrição: {card.desc}</p>
                    <p>Significado reverso: {card.meaning_rev}</p>
                    <p>Type: {card.type}</p>    
                </div>}
            <button onClick={showMore}>{moreInfo ? <p>fechar</p> : <p>ler mais</p>}</button>              
       </div>
        
    );
}

export default Card;