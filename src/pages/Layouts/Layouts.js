
import {Link} from 'react-router-dom'


function Layouts({layouts}) {
    return ( 
        <div>
            Todos os layouts disponíveis para escolher
            {layouts.map((layout) => {
                return (
                    <div key={layout._id}>
                        <img src={layout.img} alt="spread"></img>
                        <Link to={`/layouts/${layout._id}`} >{layout.name}</Link>
                    </div>
                )
            })}
           


        </div>
     );
}

export default Layouts;