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
        <Badge borderRadius='full' px='2'>
          {p[0]}
        </Badge>
        <Text>
          {p[1]}
        </Text>
      </HStack>
    ))

    return (
      <Box key={i} minW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' p={4}>
        <Badge borderRadius='full' px='2' mb={2} colorScheme='teal'>
          {w.type}
        </Badge>
        <Text>
          {addresses}
        </Text>
      </Box>
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
