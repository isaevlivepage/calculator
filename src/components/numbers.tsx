import React from 'react';
import {Button} from "@chakra-ui/react";

interface Props {
    numbers: number;
}
const Number = ({numbers}: Props) =>
{
    return(
//         numbers.map((numb) => {
//             return <Button>{numb}</Button>
// }
//     )
        <Button key = {numbers} w ='40px' h ='40px' margin='4px'>{numbers}</Button>
    );
}

export default Number;