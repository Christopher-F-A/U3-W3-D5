import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import MusicCard from "./components/MusicCard";
import RadioCard from "./components/RadioCard";
import { DeezerTrack, DeezerResponse } from "./types/deezer";

const App = () => {
  const [tracks, setTracks] = useState<DeezerTrack[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMusic = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=aphextwin");
      const data: DeezerResponse = await response.json();
      setTracks(data.data.slice(0, 12));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  return (
    <div className="container-fluid bg-black text-light min-vh-100">
      <Header />

      <div className="row">
        <Sidebar />

        <main className="col-12 col-md-10 p-4">
          <h2 className="mb-4">Novità</h2>

          <div className="row">
            <RadioCard image="./assets/images/1a.png" title="Ascolta Apple Music Chill" subtitle="NUOVA STAZIONE RADIO" />
            <RadioCard image="./assets/images/2a.png" title="Ecco la nuova casa della musica latina" subtitle="NUOVA STAZIONE RADIO" />
          </div>

          <Section title="Nuove uscite">
            <div className="row">{loading ? <p>Caricamento...</p> : tracks.map((track) => <MusicCard key={track.id} track={track} />)}</div>
          </Section>
        </main>
      </div>
    </div>
  );
};

export default App;
