import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Herosection from "./Components/Herosection/herosection";
import Section from "./Components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import styles from "./App.module.css";

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  const generatedata = async () => {
    setTopAlbums(await fetchTopAlbums());
    setNewAlbums(await fetchNewAlbums());
    setSongs(await fetchSongs());
  };

  useEffect(() => {
    generatedata();
  }, []);

  return (
    <div className={styles.app}>
      <Navbar songs={songs} />
      <Herosection />
      <div style={{ marginBottom: "30px" }}>
        <Section data={topAlbums} title="Top Albums" />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <Section data={newAlbums} title="New Albums" />
      </div>
      <hr className={styles.divider} />
    </div>
  );
};

export default App;
