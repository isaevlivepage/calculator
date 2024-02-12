import {Box, Text, Button, Input, Flex} from "@chakra-ui/react";
import { useState } from "react";
import InputCalc from "./InputCalc";

type Props = {
    number: any;
    result: any;
    setNumber?: any;
    setResult?: any;
    applyExpression?: any;
};
const Calculator = () => {


    // const [number, setNumber] = useState('0');
    // const [result, setResult] = useState('');
    //
    // const applyExpression = (countedNumber: string) => {
    //     setNumber(countedNumber);
    //     setResult(eval(number));
    // }
    const calcTypeChange = () => {
            calcType == 'ClickCalc' ? setCalcType('InputCalc') : setCalcType('ClickCalc');
    };

    const [calcType, setCalcType] = useState('ClickCalc');
    let calculator;
    switch (calcType) {
        case 'ClickCalc':
            calculator = '123';
            break;
        case 'InputCalc':
            calculator = <InputCalc/>;
            break;
        default:
            calculator = '123';
    }
    return (
        <Box display='flex' flexDirection='column' justifyContent='center' m='10px'>
            <Button onClick={calcTypeChange}>
                Change CalcType
            </Button>
            <Box m='10px'>
                {calculator}
            </Box>
        </Box>
    )
}

export default Calculator;