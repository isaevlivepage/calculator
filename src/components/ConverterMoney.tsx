import {Box, Flex, Text, Input, Select, Button, List, ListItem} from "@chakra-ui/react";
import {useRef, useState} from "react";
import Calculator from "./Calculator";
import getCurrency from "../functions/getCurrency";


const Converter = () => {

    const firstRef = useRef<any>();
    const secondRef = useRef<any>();

    const [input,  setInput, ] = useState<string|number>(0);
    const [result, setResult] = useState<string|number>(0);


    const convertMoney = async () => {
        const currencyUsd = Number(await getCurrency());
        // debugger;
        switch (secondRef.current.value) {
            case ' Доллар США':
                setResult(input);
                break;
            case 'Рубли':
                setResult(Number(input) * currencyUsd);
                break;
        }
        }

    return (
        <Flex justifyContent='center' alignItems='center' flexDirection='column' gap='10px' w='100%'>


            <Text>{result}</Text>
            <Input w='50%' type='number' onChange={(e) => setInput(Number(e.target.value))}/>

            <Flex gap='15px'>
                <Select ref={firstRef} size='md' w='90%' >
                    <option value='Доллар США'>Доллар США</option>
                    <option value='Рубли'>Рубли</option>
                </Select>
            </Flex>

            <Flex>
                <Select ref={secondRef} size='md' w='90%' >
                    <option value='Доллар США'>Доллар США</option>
                    <option value='Рубли'>Рубли</option>
                </Select>
            </Flex>

            <Button onClick={() => {convertMoney()}}>Convert</Button>
        </Flex>
    )
}

export default Converter;