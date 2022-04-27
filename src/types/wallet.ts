import { ConnectionTypes, walletAddresses } from ".";

export interface Wallet {
  address: String | undefined;
  connectionType: ConnectionTypes;
  connect?(): void;
  disconnect(): void;
  getAddress(): walletAddresses;
}