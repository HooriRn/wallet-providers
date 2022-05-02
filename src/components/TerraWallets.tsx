import { HStack, Badge, Text, VStack, Box } from "@chakra-ui/react";
import { useConnectedWallet, useWallet } from "@terra-money/wallet-provider";
import { FC } from "react";

type Props = {

};

const TerraWallets: FC<Props> = () => {
  const wallet = useConnectedWallet();

  const terraWallets = [wallet].map((w,i) => (
    <VStack key={i} borderWidth='1px' borderRadius='lg' overflow='hidden' p={2}>
        <HStack justify="flex-start">
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {w?.connectType}
          </Badge>
          {
            <Badge borderRadius='full' px='2' colorScheme={w?.network.name == 'testnet'? 'yellow':'green'}>
              {w?.network.name}
            </Badge>
          }
        </HStack>
        <HStack borderRadius='lg' borderWidth='1px' p={3}>
          <Badge fontSize='0.8em' variant='outline' colorScheme='green'>
            Terra
          </Badge>
          <Text>
            {w?.terraAddress}
          </Text>
        </HStack>
    </VStack>
  ))


  return (
    <>
      {wallet && terraWallets}
    </>
  )
}

export default TerraWallets;