import { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import "./App.css";

export default function App() {
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 20件のデータを取得
      let res = await getAllPokemon(initialUrl);
      //詳細な情報の取得
      loadPokemonData(res.results);
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

  console.log(pokemonData)

  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : <h1>ポケモンデータを取得</h1>}
    </div>
  );
}
