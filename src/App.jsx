import { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Btn from "./components/Btn/Btn";
import CardContainer from "./components/CardContainer/CardContainer";

export default function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのデータを取得
      let res = await getAllPokemon(initialUrl);
      //詳細な情報の取得
      loadPokemonData(res.results);
      setNextUrl(res.next);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemonData = async (data) => {
    let pokemonDetailData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(pokemonDetailData);
  };

  const handleNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemonData(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    console.log(data);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemonData(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <CardContainer pokemonData={pokemonData} />
            <Btn
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
            />
          </>
        )}
      </div>
    </>
  );
}
