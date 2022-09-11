import * as React from 'react';

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const MinhasNftsContext = React.createContext<any>({});

export default function MinhasNftsCtxProvider({ children }: { children: React.ReactNode }) {

  const [completed, setCompleted] = React.useState(false);

  return <MinhasNftsContext.Provider value={{}}>

  </MinhasNftsContext.Provider>
}
