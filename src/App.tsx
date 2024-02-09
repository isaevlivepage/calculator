import React, {JSX} from 'react';
import './App.css';
import { Box, Text, Button } from '@chakra-ui/react'
import {useState} from "react";
import Number from "./components/numbers";


const App:React.FunctionComponent = () => {

    const [counts, setCounts] = useState(0);
    const [result, setResult] = useState('');


  return (
    <div className="App">
      <Box display='flex' flexDirection='column' justifyContent = 'center' alignItems='center' h='100vh'>
          <Box display='flex' gap='5px' flexDirection='column' justifyContent='center' alignItems='center' w='200px'>
              <Box display='flex' justifyContent='between' w='100%' bg = 'gray.50' borderRadius='8px'>
                  <Text display='flex' justifyContent='start' alignItems='center'  w='100%' h='38px' px='4px' >
                      {counts}
                  </Text>
                  <Text display = 'flex' justifyContent='end' w='fit-content' h='38px' textColor='tomato' alignItems='center'>
                      {result}
                  </Text>
              </Box>
                <Number data={counts} onClick={setCounts}/>
          </Box>
      </Box>

    </div>
  );
}

export default App;
