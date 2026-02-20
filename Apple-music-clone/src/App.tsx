import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import MusicCard from "./components/MusicCard";
import RadioCard from "./components/RadioCard";
import { DeezerTrack, DeezerResponse } from "./types/deezer";
import RadioEpisodeCard from "./components/RadioEpisodeCard";
import Footer from "./components/Footer";

const App = () => {
  const [tracks, setTracks] = useState<DeezerTrack[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMusic = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=rock");
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
    <div className="app-container">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <Sidebar />

          <main className="col-12 col-md-10 content-area  ">
            <Header />
            <h1 className="page-title mt-4 px-4">Novità</h1>
            <hr className="border-secondary opacity-25" />

            {/* SEZIONE RADIO PRINCIPALE */}
            <div className="row mt-4 ">
              <RadioCard
                image="/src/assets/images/1a.png"
                title="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
                subtitle="NUOVA STAZIONE RADIO"
              />
              <RadioCard image="/src/assets/images/1b.png" title="Ecco la nuova casa della musica latina" subtitle="NUOVA STAZIONE RADIO" />
            </div>

            {/* NUOVI EPISODI RADIO */}
            <Section title="Nuovi episodi radio >">
              <div className="row g-3 flex-nowrap overflow-auto pb-3 no-scrollbar">
                <RadioEpisodeCard image="/src/assets/images/2a.png" showTitle="Prólogo con Abuelo" title="Con Relis" />
                <RadioEpisodeCard image="/src/assets/images/2b.png" showTitle="The Wanderer" title="The Wanderer" />
                <RadioEpisodeCard image="/src/assets/images/2c.png" showTitle="Michael Bublé & Carly Pearce" title="Zane Lowe" />
                <RadioEpisodeCard image="/src/assets/images/2d.png" showTitle="Stephan Moccio" title="The Zane Lowe Interview" />
                <RadioEpisodeCard image="/src/assets/images/2e.png" showTitle="Chart Spotlight" title="Julia Michaels" />
              </div>
            </Section>

            {/* NUOVE USCITE */}
            <Section title="Nuove uscite >">
              <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4 ">
                {loading ? <p>Caricamento...</p> : tracks.map((track) => <MusicCard key={track.id} track={track} />)}
              </div>
            </Section>

            {/* ALTRO DA ESPLORARE */}
            <Section title="Altro da esplorare">
              <div className="explore-grid ">
                {[
                  "Esplora per genere",
                  "Worldwide",
                  "Video musicali",
                  "Decenni",
                  "Classifiche",
                  "Nuovi artisti",
                  "Attività e stati d'animo",
                  "Audio spaziale",
                  "Hit del passato",
                ].map((item) => (
                  <div key={item} className="explore-item">
                    {item} <i className="bi bi-chevron-right small"></i>
                  </div>
                ))}
              </div>
            </Section>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
