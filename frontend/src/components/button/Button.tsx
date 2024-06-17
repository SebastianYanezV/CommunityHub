import './Button.css';

interface ButtonProps {
  onClick?: () => void; 
  buttonText: string;
  color?: string; 
}

const Button: React.FC<ButtonProps> = ({ onClick, buttonText, color }) => {
  const buttonStyle = { backgroundColor: color || 'var(--bs-primary)' };

  return (
    <button className='button-container' onClick={onClick} style={buttonStyle}>
      <h3>{buttonText}</h3>
    </button>
  );
};

export default Button;
