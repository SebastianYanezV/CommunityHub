import './InputField.css';

interface ImputFieldProps { 
  inputText: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImputField: React.FC<ImputFieldProps> = ({
  inputText, 
  type,
  //value,
  //onChange
}) => {

  return (
    <input 
      type={type} 
      //value={value} 
      //onChange={onChange} 
      className="input-field" 
      placeholder={inputText}/>   
  );
};

export default ImputField;