import { Box } from '@chakra-ui/react';
import React from 'react';
import logo from './assets/icons/logo.svg';
import ConnectButton from './components/ConnectButton';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Box m={4}>
          <ConnectButton></ConnectButton>
        </Box>
      </main>
    </div>
  );
}

export default App;
