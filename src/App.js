import React, { useState, useEffect } from "react";
import Header from "./components/ui/header";
import axios from "axios";
import "./App.css";
import CharacterGrid from "./components/characters/characterGrid";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
