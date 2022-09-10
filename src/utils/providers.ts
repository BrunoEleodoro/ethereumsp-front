import { ethers } from "ethers";

export const providerAvalanche = new ethers.providers.JsonRpcProvider(
  'https://api.avax.network/ext/bc/C/rpc'
);
export const providerEthereum = new ethers.providers.JsonRpcProvider(
  'https://mainnet.infura.io/v3/'
);
export const providerPolygon = new ethers.providers.JsonRpcProvider(
  'https://polygon-rpc.com'
);
