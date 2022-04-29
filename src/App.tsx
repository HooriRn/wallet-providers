import { Badge, Box, Center, Container, HStack, Text, VStack } from '@chakra-ui/react';
import logo from './assets/icons/logo.svg';
import ConnectButton from './components/ConnectButton';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import './styles/main.scss';

function App() {
  const wallets = useSelector((state: RootState) => state.walletStorage).map((w, i) => {
    const addresses = Object.entries(w.address).map(p => (
      <HStack borderRadius='lg' borderWidth='1px' p={3}>
        <Badge fontSize='0.8em' variant='outline' colorScheme='green'>
          {p[0]}
        </Badge>
        <Text>
          {p[1]}
        </Text>
      </HStack>
    ))

    return (
      <VStack key={i} borderWidth='1px' borderRadius='lg' overflow='hidden' p={2}>
        <HStack justify="flex-start">
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {w.type}
          </Badge>
        </HStack>
        <Text fontFamily="Roboto Mono">
          {addresses}
        </Text>
      </VStack>
    )
  })
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Container>
          <Box m={4}>
            <ConnectButton></ConnectButton>
          </Box>
          <Center>
            <VStack>
             {wallets}
            </VStack>
          </Center>
        </Container>
      </main>
    </div>
  );
}

export default App;
