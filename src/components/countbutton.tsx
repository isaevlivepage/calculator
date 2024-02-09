import {Button} from "@chakra-ui/react";
import React from 'react';

type Props = {
    expression: string;
}

const CountButton = ({expression} : Props) => {
    return(
        <Button key = {expression} w ='40px' h ='40px' margin='4px'>{expression}</Button>
    )
}

export default CountButton;