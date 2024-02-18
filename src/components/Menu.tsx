import {Box, Button, List, SlideFade, useDisclosure} from "@chakra-ui/react";
import { ListItem, UnorderedList } from '@chakra-ui/react';
import {HamburgerIcon} from "@chakra-ui/icons";

type Props = {
    changeAppType: (mode: string) => void;
}
const Menu = ({changeAppType} : Props) => {
    const {isOpen, onToggle} = useDisclosure();

    return (
        <Box display='flex' flexDirection='row'>
        <HamburgerIcon w='45px' h='45px' p='5px' m='5px' borderRadius='5px' onClick={onToggle}/>
        <SlideFade in={isOpen} offsetY='-20px' unmountOnExit>
        <Box display='flex' bg='gray.100' p='10px' m='4px' borderRadius='8px' w='60%' position='absolute' zIndex='10'>
            <List display='flex' flexDirection='column' gap='10px' fontSize='20px'>
                <Button onClick={() => changeAppType('Calculator')}>Calculator</Button>
                <Button onClick={() => changeAppType('Converter')}>Converter</Button>
                <Button>Settings</Button>
            </List>
        </Box>
        </SlideFade>
        </Box>
    )
}

export default Menu