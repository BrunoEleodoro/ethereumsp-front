import { Interface } from "ethers/lib/utils";
import { openSeaEthereumAddress, openSeaPolygonAddress } from "./address";
import { providerEthereum, providerPolygon } from "./providers";
import WyvernExchange from '../abis/WyvernExchange.json';
import Seaport from '../abis/Seaport.json';
import ERC721 from '../abis/ERC721.json';
import { ethers } from "ethers";

export const openSeaEthereumContract = new ethers.Contract(
  openSeaEthereumAddress,
  new Interface(WyvernExchange),
  providerEthereum
);

export const openSeaPolygonContract = new ethers.Contract(
  openSeaPolygonAddress,
  new Interface(Seaport),
  providerPolygon
);
