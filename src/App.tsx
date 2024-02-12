import './App.css';
import { Box, Text } from '@chakra-ui/react'
import {useState} from "react";
import Number from "./components/numbers";
import CountButton from "./components/countbutton";
import {data} from "cheerio/lib/api/attributes";


const App:React.FunctionComponent = () => {

    const [number, setNumber] = useState('0');
    const [result, setResult] = useState('');

    const applyExpression = (countedNumber: string) => {
        setNumber(countedNumber);
        setResult(eval(number));
    }


    return (
    <div className="App">
      <Box display='flex' flexDirection='column' justifyContent = 'center' alignItems='center' h='100vh'>
          <Box display='flex' gap='5px' flexDirection='column' justifyContent='center' alignItems='baseline' w='200px'>
              <Box display='flex'  w='100%' bg = 'gray.50' borderRadius='8px'>
                  <Text display='flex' justifyContent='start' alignItems='center'  w='100%' h='38px' px='4px' >
                      {number}
                  </Text>
                  <Text display = 'flex' justifyContent='end' w='fit-content' h='38px' textColor='tomato' alignItems='center'>
                      {result}
                  </Text>
              </Box>

              <Number number={number} setNumber={setNumber}/>
              <Box display='flex' flexDirection='row'>
                  <CountButton data = {number} expression={'+'} applyExpression = {applyExpression}/>
                  {/*<CountButton expression={'-'}/>*/}
                  {/*<CountButton expression={'*'}/>*/}
                  {/*<CountButton expression={'/'}/>*/}
              </Box>
          </Box>
      </Box>

    </div>
  );
}

export default App;
