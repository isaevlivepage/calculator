import React from 'react';
import './App.css';
import { Box, Text, Button } from '@chakra-ui/react'
import Number from "./components/numbers";


const App:React.FunctionComponent = () => {

    const nums: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //const nums : number = 1;

  return (
    <div className="App">
      <Box display='flex' justifyContent = 'center' alignItems='center' h='100vh'>
        {/*<Text fontSize = "2xl">Hello!</Text>*/}

        <Box display='flex' flexWrap='wrap' w='15%'>
            {nums.map((num) => {
                return (<Number numbers={num}/>)
            })}
            {/*<Number numbers={nums}/>*/}
        </Box>
      </Box>

    </div>
  );
}

export default App;
