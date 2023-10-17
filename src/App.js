import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Herosection from "./Components/Herosection/herosection";
import { fetchTopAlbums } from "./api/api";
import Card from "./Components/Card/Card";

const App = () => {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateTopAlbumsData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  };

  useEffect(() => {
    generateTopAlbumsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Herosection />
      {topAlbumsData.map((item) => {
        return <Card data={item} type="album" />;
      })}
    </div>
  );
};

export default App;
