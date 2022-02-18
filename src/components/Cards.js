import { Link } from 'react-router-dom'


function Cards(props) {
   return (
      <div>
         <div className='flex' key={props.name_short}>
            <h4>{props.name}</h4>
            <p>Type: {props.type === 'major' ? 'Arcanjo Maior' : 'Arcanjo Menor'}</p>
            <p>Id: {props.name_short}</p>
            <Link className='btn btn-sm btn-outline-warning' to={`/tarotas/${props._id}`}>Abrir Carta</Link>

         </div>



      </div>
   );
}

export default Cards;