import { Button, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import WalletsProviders from "../wallets";
import WalletModal from "./WalletModal";

type Props = {};

const ConnectButton: FC<Props> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch: AppDispatch = useDispatch();

  const buttons = WalletsProviders().map((wallet, index) => (
    <Button
      key={index}
      transition="0.2s all"
      p="6"
      borderRadius="xl"
      width="100%"
      mb="4"
      colorScheme={"blackAlpha"}
      onClick={() => {
        onClose();
        wallet.connect(dispatch);
      }}
    >
      <HStack justify="space-between">
        <Text>{wallet.name}</Text>
        <Image src={wallet.icon} htmlWidth="24" alt="" />
      </HStack>
    </Button>
  ));
  
  
  return (
    <>
      <Button onClick={onOpen}>
        <HStack spacing="3">
          <Text fontSize="md">Connect your wallet</Text>
        </HStack>
      </Button>
      <WalletModal isOpen={isOpen} onClose={onClose} title='Choose your connection type'>
        {buttons}
      </WalletModal>
    </>
  )
}

export default ConnectButton;