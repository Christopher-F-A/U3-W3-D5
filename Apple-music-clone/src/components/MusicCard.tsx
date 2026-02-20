import { DeezerTrack } from "../types/deezer";

interface Props {
  track: DeezerTrack;
}

const MusicCard = ({ track }: Props) => {
  return (
    <div className="col-6 col-md-3 col-lg-2 mb-4">
      <div className="card bg-dark text-light border-0">
        <img src={track.album.cover_medium} className="card-img-top" alt={track.title} />
        <div className="card-body p-2">
          <p className="card-title small mb-1 text-truncate">{track.title}</p>
          <p className="card-text small text-muted text-truncate">{track.artist.name}</p>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
