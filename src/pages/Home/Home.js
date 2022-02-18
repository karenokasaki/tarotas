import Card from "../Card/Card";
import Search from "../../components/Search";
import { useState } from "react";

function Home({ cards }) {
    //recebendo as cartas da api

    const [search, setSearch] = useState('')

    return (
        <div>
            <div>
                <Search
                    search={search}
                    setSearch={setSearch}
                />
            </div>
            <div className="flex flex-col">
                {cards
                    .filter((card) => {
                        return (card.name.toLowerCase()).includes(search.toLowerCase())
                    })
                    .map((card) => {
                        return (
                            <div key={card.name_short} className="p-2 m-2 border-2 rounded-xl  ">
                                <Card card={card} setSearch={setSearch} /> {/* passando as cartas para serem filtradas */}
                            </div>
                        )
                    })}
            </div>

        </div>
    );
}

export default Home;