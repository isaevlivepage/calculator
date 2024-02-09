import React from 'react';
import {Box, Button} from "@chakra-ui/react";
import {data} from "cheerio/lib/api/attributes";

interface Props {
    data: number | string;
    onClick?: any;
}
// const Number = ({numbers, data}: Props) =>
// {
//     return(
// //         numbers.map((numb) => {
// //             return <Button>{numb}</Button>
// // }
// //     )
//         <Button key = {numbers} w ='40px' h ='40px' margin='4px'>{numbers}</Button>
//     );
// }

const number = ({data, onClick} : Props) => {
    const numbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const nums = numbers.map((num) => {
        return (<Button key = {num} w ='40px' h ='40px' margin='4px'
        onClick={(e) => {
            console.log('asdf = ', num);
            debugger;
            if(data == 0) onClick(num)
            else {
                onClick(`${data}${num}`);
                console.log('!=0')
            }
            //data = 0 ? onClick(num) : onClick(`${data}${num}`);
            // onClick(data + num);
        }
        }>{num}</Button>)
    });
    return <Box>{nums}</Box>
}

export default number;