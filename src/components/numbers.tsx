import React from 'react';
import {Box, Button} from "@chakra-ui/react";
import {data} from "cheerio/lib/api/attributes";



type Props = {
    number: string;
    setNumber?: any;
}
const numbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];//на уровень выше


const number = ({number, setNumber} : Props) => {
    const nums = numbers.map((num) => {
        return (<Button key = {num} w ='40px' h ='40px' margin='4px'
        onClick={() => {
            console.log('asdf = ', num);
            // debugger;
            if(number == '0') setNumber(num)
            else {
                setNumber(`${number}${num}`);
            }
            //data = 0 ? onClick(num) : onClick(`${data}${num}`);
            // onClick(data + num);
        }
        }>{num}</Button>)
    });
    return <Box>{nums}</Box>
}

export default number;