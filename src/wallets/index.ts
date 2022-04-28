import { KeystoreClass } from "./keystore";
import { AppDispatch } from "../store";
import { addWallet } from "../store/wallets";
import { ConnectionTypes } from "../types";
import { generatePhrase } from '@xchainjs/xchain-crypto';


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
          type: ConnectionTypes.KEYSTORE
        }))
      }
    }
  ]
}

export const walletImport = {
  name: 'Import Keystore',
  icon: KeystoreClass.iconSrc,
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