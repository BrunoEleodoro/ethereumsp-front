import { ethers } from 'ethers';
import { Interface } from 'ethers/lib/utils';
import * as React from 'react';
import { providerPolygonMumbai } from '../utils/providers';
import ERC721Metadata from '../abis/ERC721Metadata.json';
import { useEthers } from '@usedapp/core';
import axios from 'axios';

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const MinhasNftsContext = React.createContext<any>({});

export default function MinhasNftsCtxProvider({ children }: { children: React.ReactNode }) {

  const { account } = useEthers();
  const [minhasNfts, setMinhasNfts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem('token');

      const nft = JSON.parse(localStorage.getItem('transaction') ?? "{}");
      if (nft.uri !== undefined) {
        const parsedMetadata = await axios.get(nft.uri);
        setImage(parsedMetadata.data.image! ?? "");
      }
      if (token) {
        const tokenContract = new ethers.Contract(
          token,
          new Interface(ERC721Metadata),
          providerPolygonMumbai
        );
        const balance = await tokenContract.balanceOf(account);
        console.log('balance', balance.toString());
        const metadata = await tokenContract.tokenURI(0);
        console.log('metadata', metadata);
      }
    }
    fetchData();
  }, []);

  return <MinhasNftsContext.Provider value={{ minhasNfts, isLoading, image }}>
    {children}
  </MinhasNftsContext.Provider>
}
