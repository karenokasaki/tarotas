

function SearchTiragem({ searchTiragem, setSearchTiragem }) {


    function handleChange(event) {
        setSearchTiragem(event.target.value)
    }

    return ( 
        <input 
            placeholder="Busque por alguma tiragem"
            value={searchTiragem}
            onChange={handleChange}
            
        />
     );
}

export default SearchTiragem;