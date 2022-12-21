import Button from './components/Button';
import Input from './components/Input';
import { Container,Content, Row } from './styles';
import './App.css';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [fristNumber, setfristNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setfristNumber('0');
    setOperation('')

  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev }${number}`)
  }

  const handleSumNumbers = () => {

    if(fristNumber === '0') {
        setfristNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('+')
    } else {
        const sum = Number(fristNumber) + Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('')
    }
  }

  const handleSubNumbers = () => {

    if(fristNumber === '0') {
        setfristNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('-')
    } else {
        const sum = Number(fristNumber) - Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('')
    }
  }

  const handleMulNumbers = () => {

    if(fristNumber === '0') {
        setfristNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('*')
    } else {
        const sum = Number(fristNumber) * Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('')
    }
  }

  const handleDivNumbers = () => {

    if(fristNumber === '0') {
        setfristNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('/')
    } else {
        const sum = Number(fristNumber) / Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('')
    }
  }

  const handleEquals = () => {

    if(fristNumber !== '0' && operation !== '' && currentNumber !== '0' ) {
          switch(operation) {
            case '+' :
              handleSumNumbers();
              break;
            case '-' :
              handleSubNumbers();
              break;
            case '*' :
              handleMulNumbers();
              break;
            case '/' :
              handleDivNumbers();
              break;
            default:
              break;
          }
    } 
  }

  return (
    <Container>
      <Content>
       <Input value={currentNumber}/>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="/" onClick={handleDivNumbers}/>
          <Button label="x" onClick={handleMulNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
