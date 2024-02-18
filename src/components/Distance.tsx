import {Box, Flex, Text, Input, Select, Button, List, ListItem} from "@chakra-ui/react";
import {useRef, useState} from "react";
import Calculator from "./Calculator";
import getCurrency from "../functions/getCurrency";
import converter from "./Converter";


const Converter = () => {

    const firstRef = useRef<any>();
    const secondRef = useRef<any>();

    const [input,  setInput, ] = useState<string|number>(0);
    const [result, setResult] = useState<string|number>(0);

    const convert = () => {
        if(firstRef.current.value == 'Meters') {
            switch (secondRef.current.value) {
                case 'Centimeters':
                    setResult(Number(input) * 100);
                    break;
                case 'Meters':
                    setResult(Number(input));
                    break;
            }
        }

        if(firstRef.current.value == 'Centimeters') {
            switch (secondRef.current.value) {
                case 'Meters':
                    setResult(Number(input) / 100);
                    break;
                case 'Centimeters':
                    setResult(Number(input));
                    break;
            }
        }

    }

    return (
        <Flex justifyContent='center' alignItems='center' flexDirection='column' gap='10px' w='100%'>


            <Text>{result}</Text>
            <Input w='50%' type='number' onChange={(e) => setInput(Number(e.target.value))}/>

            <Flex gap='15px'>
                <Select ref={firstRef} size='md' w='90%' >
                    <option value='Meters'>Метры</option>
                    <option value='Centimeters'>Сантиметры</option>
                </Select>
            </Flex>

            <Flex>
                <Select ref={secondRef} size='md' w='90%' >
                    <option value='Meters'>Метры</option>
                    <option value='Centimeters'>Сантиметры</option>
                </Select>
            </Flex>

            <Button onClick={() => {convert()}}>Convert</Button>
        </Flex>
    )
}

export default Converter;