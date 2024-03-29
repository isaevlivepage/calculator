import {Box, Text, Button, Input, Flex} from "@chakra-ui/react";
import Menu from "./Menu";
import History from "./History";


type Props = {
    calculator: any;
    calcTypeChange: any;
    history: any;
};
const Calculator = ({calculator, calcTypeChange} : Props) => {

    return (
        <Box display='flex' flexDirection='column' justifyContent='center' m='10px'>
        <Button onClick={calcTypeChange}>
            Change CalcType
        </Button>
        <Box m='10px'>
            {calculator}
            {/*{application}*/}
        </Box>
    </Box>
    )
}

export default Calculator;