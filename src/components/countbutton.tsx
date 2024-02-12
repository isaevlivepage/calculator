import {Button} from "@chakra-ui/react";
import React from 'react';


type Props = {
    expression: string;
    data: string;
    applyExpression: any;
}

const CountButton = ({expression, data, applyExpression} : Props) => {
    return(
        <Button key = {expression} w ='40px' h ='40px' margin='4px' onClick={() => applyExpression(data + expression)}>
            {expression}
        </Button>
    )
}

export default CountButton;