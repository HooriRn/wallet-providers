import { KeystoreClass } from "./keystore";
import { AppDispatch } from "../store";
import { addWallet } from "../store/wallets";
import { ConnectionTypes } from "../types";
import { generatePhrase } from '@xchainjs/xchain-crypto';
import { XDEFIClass } from "./xdefi";


const WalletsProviders = () => {
  return [
    {
      name: 'Create new Keystore',
      icon: KeystoreClass.iconSrc,
      type: KeystoreClass.connectionType,
      connect: (dispatch: AppDispatch) => {
        const phrase = generatePhrase();
        const thorClient = new KeystoreClass(phrase);
        dispatch(addWallet({
          address: thorClient.getAddress(),
          client: thorClient,
          type: KeystoreClass.connectionType,
          network: 'testnet'
        }))
      }
    },
    {
      name: 'Connect XDEFI',
      icon: XDEFIClass.iconSrc,
      type: XDEFIClass.connectionType,
      connect: async (dispatch: AppDispatch) => {
        const xdefiClient = new XDEFIClass();
        await xdefiClient.connect()
        console.log(xdefiClient.getNetwork())
        dispatch(addWallet({
          address: xdefiClient.getAddress(),
          client: xdefiClient,
          type: XDEFIClass.connectionType,
          network: xdefiClient.getNetwork()
        }))
      }
    }
  ]
}

export const walletImport = {
  name: 'Import Keystore',
  icon: 'https://img.icons8.com/ios-filled/50/000000/add--v1.png',
  type: KeystoreClass.connectionType,
  connect: (dispatch: AppDispatch, phrase: string) => {
    const thorClient = new KeystoreClass(phrase);
    dispatch(addWallet({
      address: thorClient.getAddress(),
      client: thorClient,
      type: ConnectionTypes.KEYSTORE
    }))
  }
}

export default WalletsProviders;