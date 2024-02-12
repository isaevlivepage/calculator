import './App.css';
import {Box, Button, Text} from '@chakra-ui/react'
import {useState} from "react";
import Number from "./components/Numbers";
import CountButton from "./components/CountButton";
import {data} from "cheerio/lib/api/attributes";
import InputCalc from "./components/InputCalc";
import Calculator from "./components/Calculator";


const App:React.FunctionComponent = () => {

    const [number, setNumber] = useState('0');
    const [result, setResult] = useState('');
    const [calcType, setCalcType] = useState('ClickCalc');

    const applyExpression = (countedNumber: string) => {
        setNumber(countedNumber);
        setResult(eval(number));
    }

    const calcTypeChange = () => {
        calcType == 'ClickCalc' ? setCalcType('InputCalc') : setCalcType('ClickCalc');
    };

    let calculator;

    switch (calcType) {
        case 'ClickCalc':
            calculator =
                <Box display='flex' gap='5px' flexDirection='column' justifyContent='center' alignItems='baseline' w='200px'>
                    <Box display='flex'  w='100%' bg = 'gray.50' borderRadius='8px'>
                        <Text display='flex' justifyContent='start' alignItems='center'  w='100%' h='38px' px='4px' >
                            {number}
                        </Text>
                        <Text display = 'flex' justifyContent='end' w='fit-content' h='38px' textColor='tomato' alignItems='center'>
                            {result}
                        </Text>
                    </Box>

                    <Box display='flex'>
                        <Number number={number} setNumber={setNumber}/>
                        <Box display='flex' flexDirection='column'>
                            <CountButton data = {number} expression={'+'} applyExpression = {applyExpression}/>
                            <CountButton data = {number} expression={'-'} applyExpression = {applyExpression}/>
                            <CountButton data = {number} expression={'*'} applyExpression = {applyExpression}/>
                            <CountButton data = {number} expression={'/'} applyExpression = {applyExpression}/>
                        </Box>
                        <Button m = '4px' bg = 'tomato' onClick={() => {setResult(eval(number))}}>=</Button>
                    </Box>
                </Box>;
            break;
        case 'InputCalc':
            calculator = <InputCalc/>;
            break;
        default:
            calculator = '123';
    }
return(
    <div className="App">
      <Box display='flex' flexDirection='column' justifyContent = 'center' alignItems='center' h='100vh'>
          {/*switchMode*/}
          <Box display='flex' flexDirection='column' justifyContent='center' m='10px'>
              <Button onClick={calcTypeChange}>
                  Change CalcType
              </Button>
              <Box m='10px'>
                  {calculator}
              </Box>
          </Box>

      </Box>

    </div>
  );
}

export default App;
