

function SearchTiragem({ searchTiragem, setSearchTiragem }) {


    function handleChange(event) {
        setSearchTiragem(event.target.value)
    }

    return (
        <input
            placeholder="Busque por algum layout"
            value={searchTiragem}
            onChange={handleChange}
            className='border rounded-md placeholder:italic px-3 py-2 border border-slate-400 w-full'

        />
    );
}

export default SearchTiragem;