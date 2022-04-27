import { ConnectionTypes, Wallet, walletAddresses } from "../types";
import { Chain, THORChain } from "@xchainjs/xchain-util";
import { Client as thorchainClient } from '@xchainjs/xchain-thorchain';
import { Network } from "@xchainjs/xchain-client";
import { CHAIN_IDS } from "../constants";
export class KeystoreClass implements Wallet {
  static connectionType: ConnectionTypes = ConnectionTypes.KEYSTORE;
  static iconSrc: string = '';
  address: String | undefined;
  userThorchainClient: thorchainClient;

  constructor(phrase?: string) {
    this.userThorchainClient = new thorchainClient({ network: Network.Testnet, phrase, chainIds: CHAIN_IDS });
  }

  async disconnect(): Promise<void> {
    this.userThorchainClient.purgeClient();
  }

  getAddress(chain?: Chain): walletAddresses {
    return {
      [THORChain]: this.userThorchainClient.getAddress(),
    };
  }
}