import { useEtherBalance, useEthers } from '@usedapp/core';
import { BigNumber } from 'ethers';
import { formatEther, parseEther } from 'ethers/lib/utils';
import * as React from 'react';

export default function Home({ }) {
  const { account } = useEthers();
  const balance = useEtherBalance(account);

  return <>{account ? "Conta: " + account : ""}<br />
    Balance: {balance ? formatEther(balance!.toString()) : null}
  </>;
}
