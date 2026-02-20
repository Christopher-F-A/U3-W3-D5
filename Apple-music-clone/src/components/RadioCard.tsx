interface Props {
  image: string
  title: string
  subtitle: string
}

const RadioCard = ({ image, title, subtitle }: Props) => {
  return (
    <div className="col-12 col-md-6 mb-3">
      <div className="position-relative">
        <img src={image} className="img-fluid rounded" alt={title} />
        <div className="position-absolute bottom-0 start-0 p-3 text-white">
          <small>{subtitle}</small>
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  )
}

export default RadioCard