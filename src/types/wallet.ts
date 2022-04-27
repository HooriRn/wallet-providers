import { ConnectionTypes } from ".";

export interface Wallet {
  address: String | undefined;
  connectionType: ConnectionTypes;
  connect(): void;
  disconnect(): void;
  getAddress(): string;
}