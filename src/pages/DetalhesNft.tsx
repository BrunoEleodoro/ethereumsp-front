import * as React from 'react';
import { Button, createStyles, Select, Textarea, TextInput } from '@mantine/core';
import { CreateNftContext } from '../contexts/CreateNftContext';
import { NftsContext } from '../contexts/NftsContext';
import { useEthers } from '@usedapp/core';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    width: '100%',
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

export default function DetalhesNft() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  //
  const { account } = useEthers();
  const { classes } = useStyles();
  const { isLoading, setName, setDescription, salvarNft } = React.useContext(CreateNftContext);


  return (
    <div >
      <TextInput style={{ width: '100%' }} label="Titulo da NFT" placeholder="" classNames={classes} onChange={(e) => setName(e.target.value)} />
      <br />
      <Textarea style={{ width: '100%' }} label="Descrição da NFT" placeholder="" classNames={classes} onChange={(e) => setDescription(e.target.value)} />
      <br />
      <Button style={{ width: '100%' }} onClick={() => {
        salvarNft();
      }} loading={isLoading}>
        CRIAR NFT
      </Button>
    </div>
  );
}
