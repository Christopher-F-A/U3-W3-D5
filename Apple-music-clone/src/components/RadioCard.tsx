interface Props {
  image: string;
  title: string;
  subtitle: string;
}

const RadioCard = ({ image, title, subtitle }: Props) => {
  return (
    <div className="col-12 col-md-6 px-4">
      <div className="radio-card-container">
        <div className="radio-text-top">
          <span className="subtitle text-uppercase">{subtitle}</span>
          <p className="title">{title}</p>
        </div>
        <div className="radio-card-img-wrapper">
          <img src={image} alt={title} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default RadioCard;
