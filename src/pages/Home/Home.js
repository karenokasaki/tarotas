import Card from "../Card/Card";
import Search from "../../components/Search";
import './Home.css'
import { useState } from "react";

function Home({cards}) {
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
            <div className="cards">
                {cards
                    .filter((card) => {
                        return (card.name.toLowerCase()).includes(search.toLowerCase())
                    })
                    .map((card) => {
                    return (
                        <div key={card.name_short} className="card">
                        <Card  card={card}/> {/* passando as cartas para serem filtradas */}
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Home;