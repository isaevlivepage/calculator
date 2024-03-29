import {Box, Flex, Text, Input, Select, Button, List, ListItem} from "@chakra-ui/react";
import {useRef, useState} from "react";
import Calculator from "./Calculator";
import getCurrency from "../functions/getCurrency";
import { useSelector, useDispatch } from 'react-redux'
import { updateHistory, historyState } from '../historySlice'

type Props = {
    data: Array<string>;
}
const Converter = ({data} : Props) => {

    const history = useSelector(historyState);
    const dispatch = useDispatch();

    const selection = data.map( e => {
        return <option key={e} value={e}>{e}</option>
    })

    const firstRef = useRef<any>();
    const secondRef = useRef<any>();

    const [input,  setInput, ] = useState<string|number>(0);
    const [result, setResult] = useState<string|number>(0);


    const convertMoney = async () => {
        const currencyUsd = Number(await getCurrency());
        // debugger;
        switch (secondRef.current.value) {
            case 'Доллар США':
                setResult(input);
                break;
            case 'Рубли':
                dispatch(updateHistory(Number(input) * currencyUsd));
                setResult(Number(input) * currencyUsd);
                break;
        }
        }

    return (
        <Flex justifyContent='center' alignItems='center' flexDirection='column' gap='10px' w='100%'>


            <Text>{result}</Text>
            <Input w='50%' type='number' onChange={(e) => setInput(Number(e.target.value))}/>

            <Flex gap='15px'>
                <Select ref={firstRef} size='md' w='100%' >
                    {selection}
                </Select>
            </Flex>

            <Flex>
                <Select ref={secondRef} size='md' w='100%' >
                    {selection}
                </Select>
            </Flex>

            <Button onClick={() => {convertMoney()}}>Convert</Button>
        </Flex>
    )
}

export default Converter;