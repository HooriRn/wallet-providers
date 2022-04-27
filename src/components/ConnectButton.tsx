import { Button, chakra, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import WalletsProviders from "../wallets";
import WalletModal from "./WalletModal";

type Props = {
  children?: ReactNode;
};

const ConnectButton: FC<Props> = ({children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const buttons = WalletsProviders().map((wallet, index) => (
    <chakra.button
      key={index}
      transition="0.2s all"
      p="6"
      borderRadius="xl"
      width="100%"
      mb="4"
      onClick={() => {
        onClose();
        wallet.connect();
      }}
    >
      <HStack justify="space-between">
        <Text>{wallet.name}</Text>
        <Image src={wallet.icon} htmlWidth="24" alt="" />
      </HStack>
    </chakra.button>
  ));
  
  
  return (
    <>
      <Button onClick={onOpen}>Connect Your Wallet</Button>
      <WalletModal isOpen={isOpen} onClose={onClose} title={'Choose your connection type'}>
        {buttons}
      </WalletModal>
    </>
  )
}

export default ConnectButton;