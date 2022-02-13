
import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul>
                <li><Link to="/layouts">Layouts</Link></li>
                <li><Link to="/tiragens">Tiragens</Link></li>
                <a href='/'>Cartas</a>

            </ul>
        </nav>
     );
}

export default Navbar;