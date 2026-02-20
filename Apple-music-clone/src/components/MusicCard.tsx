import { DeezerTrack } from "../types/deezer";

interface Props {
  track: DeezerTrack;
}

const MusicCard = ({ track }: Props) => {
  return (
    <div className="col-6 col-md-4 col-lg-2">
      <div className="music-card">
        <img src={track.album.cover_medium} alt={track.title} className="img-fluid rounded" />
        <div className="mt-2">
          <p className="music-title">{track.title}</p>
          <p className="music-artist">{track.artist.name}</p>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
