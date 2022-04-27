import { KeystoreClass } from "./keystore";

const WalletsProviders = () => {
  return [
    {
      name: 'Create new Keystore',
      icon: KeystoreClass.iconSrc,
      type: KeystoreClass.connectionType,
      connect: () => new KeystoreClass()
    }
  ]
}

export default WalletsProviders;