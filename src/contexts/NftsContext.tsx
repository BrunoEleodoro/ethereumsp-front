import { ethers } from 'ethers';
import * as React from 'react';

export const NftsContext = React.createContext<any>({});

export default function NftsCtxProvider({ children }: { children: React.ReactNode }) {

  const [isLoading, setIsLoading] = React.useState(false);
  const [ethereumEvents, setEthereumEvents] = React.useState([]);
  const [polygonEvents, setPolygonEvents] = React.useState([]);

  async function listenOpenSeaEvents() {


  }

  return <NftsContext.Provider value={{ isLoading }}>
    {children}
  </NftsContext.Provider>
}
