import { ConnectionTypes, Wallet } from "../types";

export class KeystoreClass implements Wallet {
  address: String | undefined;
  connectionType: ConnectionTypes = ConnectionTypes.KEYSTORE;

  connect(phrase?: string): void {
    if (!phrase)
      //Create new wallet
      return;
  }

  async disconnect(): Promise<void> {

  }

  getAddress(): string {
    return '';
  }
}