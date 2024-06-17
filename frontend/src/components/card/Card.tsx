import './Card.css';

interface CardProps { 
  title: string;
  image: string;
  amount: string | number;
  iconBackgroundColor?: string; // Nueva propiedad opcional
}

const Card: React.FC<CardProps> = ({ title, image, amount, iconBackgroundColor = "#FFF5D9" }) => {
  return (
    <div className="card-container">
      <div className="card-icon" style={{ backgroundColor: iconBackgroundColor }}>
        <img src={image} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>${amount.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Card;
