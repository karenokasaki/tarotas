import Card from "../Card/Card";
import Search from "../../components/Search";
import { useState, useEffect } from "react";
import api from "../../api/api";

function Home() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        setIsLoading(true);
        const result = await api.get(
          "https://strapi-tarotas.onrender.com/api/tarota-cards"
        );
        setCards(result.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCards();
    setIsLoading(false);
  }, [isLoading]);

  console.log(cards);

  return (
    <div>
      <div>
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className="flex flex-col">
        {cards
          .filter((card) => {
            return card.attributes.name
              .toLowerCase()
              .includes(search.toLowerCase());
          })
          .map((card) => {
            return (
              <div key={card.id} className="p-2 m-2 border-2 rounded-xl  ">
                <Card card={card.attributes} setSearch={setSearch} />{" "}
                {/* passando as cartas para serem filtradas */}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
