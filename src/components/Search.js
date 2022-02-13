


function Search({search, setSearch}) {

    function handleChange(event) {
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    return ( 
        <div>
            <input 
                value={search}
                onChange={handleChange}
            /> 
        </div>
     );
}

export default Search;