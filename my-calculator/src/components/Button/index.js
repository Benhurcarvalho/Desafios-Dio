import { ButtonCaontainer } from "./styles";

const Button = ({label, onClick}) => {
    return (
      <ButtonCaontainer onClick={onClick}>
        {label}
      </ButtonCaontainer>
    );
  }
  
  export default Button;