
import { Link } from 'react-router-dom'

function Layouts({ layouts }) {
    return (
        <div className='flex flex-col items-center'>
            {layouts.map((layout) => {
                return (
                    <div key={layout._id} className='flex items-center text-center m-2 w-screen'>
                        <Link to={`/layouts/${layout._id}`} className='m-2 p-2 bg-neutral-600 rounded-lg drop-shadow-md border text-white w-1/3' >{layout.name}</Link>
                        <img src={layout.img} alt="spread" className='max-h-40 p-2'></img>
                    </div>
                )
            })}
        </div>
    );
}

export default Layouts;