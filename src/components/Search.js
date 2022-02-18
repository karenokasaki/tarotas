


function Search({search, setSearch}) {

    function handleChange(event) {
        setSearch(event.target.value)
    }

    return ( 
        
        <div className="flex flex-col justify-center p-4 bg-neutral-600  h-30">
            <p className="text-center text-white text-xl">Pesquise por uma carta</p>
            <input 
                className=" bg-slate-300 rounded-lg h-8"
                onChange={handleChange}
            ></input> 
        </div>
     );
}

export default Search;