import {Box, Flex, Text, Input, Select, Button, List, ListItem} from "@chakra-ui/react";
import {useState} from "react";


const Converter = () => {
    return (
        <Box>
            <Select size='md' w='90%' >
                <option value='Centimeters'>Centimeters</option>
                <option value='Meters'>Meters</option>
            </Select>
        </Box>
    )
}

export default Converter;