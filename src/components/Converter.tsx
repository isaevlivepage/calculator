import {Box, Flex, Text, Input, Select, Button, List, ListItem, useDisclosure, SlideFade} from "@chakra-ui/react";
import {useRef, useState} from "react";
import Calculator from "./Calculator";
import {HamburgerIcon, SettingsIcon} from "@chakra-ui/icons";
import Money from "./Money";
import Distance from "./Distance";


const Converter = () => {

    const firstRef = useRef<any>();
    const secondRef = useRef<any>();

    const [input,  setInput, ] = useState('0');
    const [result, setResult] = useState(0);
    const [mode, setMode] = useState('Distance');

    let converter;
    switch (mode){
        case 'Money':
            converter = <Money/>;
            break;
        case 'Distance':
            converter = <Distance/>
            break;
    }


    const Menu = () => {
        const {isOpen, onToggle} = useDisclosure();

        return (
            <Box display='flex' flexDirection='row'>
                <SettingsIcon w='45px' h='45px' p='5px' m='5px' borderRadius='5px' onClick={onToggle}/>
                <SlideFade in={isOpen} offsetY='-20px' unmountOnExit>
                    <Box display='flex' bg='gray.100' p='10px' m='4px' borderRadius='8px' w='60%' position='absolute' zIndex='10'>
                        <List display='flex' flexDirection='column' gap='10px' fontSize='20px'>
                            <Button onClick={() => setMode('Money')}>Money</Button>
                            <Button onClick={() => setMode('Distance')}>Distance</Button>
                        </List>
                    </Box>
                </SlideFade>
            </Box>
        )
    }

    return (
        <Flex justifyContent='center' alignItems='center' flexDirection='column' gap='10px' w='100%'>


            <Menu/>
            {converter}
        </Flex>
    )
}

export default Converter;