import './App.css';
import {Box, Button, Text} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {useState} from "react";
import Number from "./components/Numbers";
import CountButton from "./components/CountButton";
import {data} from "cheerio/lib/api/attributes";
import InputCalc from "./components/InputCalc";
import Calculator from "./components/Calculator";
import History from "./components/History";
import Menu from "./components/Menu";
import ClickCalc from "./components/ClickCalc";
import Converter from "./components/Converter";
import getCurrency from "./functions/getCurrency";
import ConverterMoney from "./components/Money";


const App:React.FunctionComponent = () => {

    const [number, setNumber] = useState('0');
    const [result, setResult] = useState('');
    const [calcType, setCalcType] = useState('ClickCalc');
    const [history, setHistory] = useState([]);
    const [mode, setMode] = useState('Calculator')




    const applyExpression = (countedNumber: string) => {
        setNumber(countedNumber);
        setResult(eval(number));
    }

    const updateHistory = (calcResult: string) => {
        if (history.length > 6) {history.shift()}
        setHistory(history.concat(eval(calcResult)));
    }



    // const changeAppType = (mode: string) => {
    //     // debugger;
    //     mode == 'Calculator' ? setMode('Converter') : setMode('Calculator');
    // }

    const calcTypeChange = () => {
        calcType == 'ClickCalc' ? setCalcType('InputCalc') : setCalcType('ClickCalc');
    };

    let application;
    let calculator;

    switch (calcType) {
        case 'ClickCalc':
            calculator = <ClickCalc number={number} setNumber={setNumber} result={result} setResult={setResult} updateHistory={updateHistory} applyExpression={applyExpression}/>;
            break;
        case 'InputCalc':
            calculator = <InputCalc updateHistory = {updateHistory}/>;
            break;
        default:
            calculator = <ClickCalc number={number} setNumber={setNumber} result={result} setResult={setResult} updateHistory={updateHistory} applyExpression={applyExpression}/>;
            break;
    }

    switch (mode) {
        case 'Calculator':
            application =  <Calculator calculator={calculator} calcTypeChange={calcTypeChange} history={history}/>;
            break;
        case 'Converter':
            application = <Converter/>
            break;
        case 'Money':
            application = <ConverterMoney/>
            break;
        default:
            application =  <Calculator calculator={calculator} calcTypeChange={calcTypeChange} history={history}/>;
            break;
    }


    getCurrency();


return(
    <div className="App">
        <Box display='flex' flexDirection='column' justifyContent = 'center' alignItems='center' h='100vh'>
            <Box display='flex' h='90px'>
                {/*<HamburgerIcon w='45px' h='45px' p='5px' m='5px' borderRadius='5px'/>*/}
                <Menu setMode = {setMode}/>
            </Box>
            <Box display='flex'  flex-direction = 'row' m='10px'>
              <History data={history}/>
          </Box>
            {application}
      </Box>

    </div>
  );
}

export default App;
