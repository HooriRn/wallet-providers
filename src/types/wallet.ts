import { walletAddresses } from ".";

export interface Wallet {
  address: String | undefined;
  connect?(): void;
  disconnect(): void;
  getAddress(): walletAddresses;
}