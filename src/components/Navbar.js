
import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav>
            <ul className='flex flex-row-reverse items-center justify-around h-12 bg-amber-400 text-amber-900 font-bold'>
                <li><Link to="/tiragens">Tiragens</Link></li>
                <li><Link to="/layouts">Layouts</Link></li>
                <a href='/'>Cartas</a>

            </ul>
        </nav>
     );
}

export default Navbar;