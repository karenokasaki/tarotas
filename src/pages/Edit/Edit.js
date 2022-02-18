import {useParams} from "react-router-dom"
import {useState, useEffect} from 'react'
import axios from 'axios'
import uniqid from 'uniqid'

function Edit() {
    const params = useParams()
    const [card, setCard] = useState({})
    /* const [newCard, setNewCard] = useState({}) */

    useEffect(() => {
        async function fetchCards() {
          try {
            const result = await axios.get(
              `https://ironrest.herokuapp.com/tarotas/${params.id}`
            )
            setCard(result.data)
          } catch (error) {
            console.log(error)
          }
        }
        fetchCards()
      }, [params.id]);;


    /* function handleSubmit() {

    } */

    function handleChange(event) {
        setCard({...card, [event.target.name] : event.target.value})
    }

    return ( 
        <>
            {Object.keys(card)
                .map((item) => {
                    return (
                        <div key={uniqid()}>
                            <label>{item}: </label>
                            <textarea 
                                value={card[item]}
                                onChange={handleChange}
                                className='border inline-block rounded-md mt-1 px-3 py-2 border border-slate-400 w-72 h-48 whitespace-normal whitespace-pre-line'
                            />
                        </div>
                    )
            })}
        </>
     );
}

export default Edit;