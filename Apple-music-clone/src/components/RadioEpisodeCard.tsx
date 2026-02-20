interface Props {
  image: string;
  title: string;
  showTitle: string;
}

const RadioEpisodeCard = ({ image, title, showTitle }: Props) => {
  return (
    <div className="col-6 col-md-4 col-lg-2-custom">
      <div className="episode-card">
        <div className="episode-img-container">
          <img src={image} alt={title} className="img-fluid rounded" />
          <div className="episode-logo">
            <i className="bi bi-apple"></i> Music
          </div>
          <div className="episode-overlay">
            <p className="episode-show">{showTitle}</p>
            <p className="episode-title">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioEpisodeCard;
