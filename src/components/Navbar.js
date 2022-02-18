
import {Link} from 'react-router-dom'

function Navbar() {
    return ( 
        <nav className='flex flex-col'>
            {/* <img src={logo} alt='logo' className='w-32'></img> */}
            <h1 className='flex justify-center tracking-wide font-bold underline decoration-teal-500'>TAROT.AS</h1>
            <ul className='flex flex-row-reverse items-center justify-around h-12 bg-amber-400 text-amber-900 font-bold'>
                <li><Link to="/tiragens">Tiragens</Link></li>
                <li><Link to="/layouts">Layouts</Link></li>
                <a href='/'>Cartas</a>
            </ul>
        </nav>
     );
}

export default Navbar;