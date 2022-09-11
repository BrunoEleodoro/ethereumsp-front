import * as React from 'react';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { Buffer } from 'buffer';
import { useEthers } from '@usedapp/core';
import axios from 'axios';

export const CreateNftContext = React.createContext<any>({})

export default function CreateNftCtxProvider({ children }: { children: React.ReactNode }) {

  const projectId = '2EGb3tpj8rhOsQLf9EHAGRp3IJZ';   // <---------- your Infura Project ID

  const projectSecret = '9257750e5479a953d20eca4e49fe71ad';  // <---------- your Infura Secret
  // (for security concerns, consider saving these values in .env files)

  const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

  const client = ipfsHttpClient({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      'Authorization': auth,
    },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  const [image, setImage] = React.useState(null);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  async function enviarImagem() {
    if (image !== undefined && image !== '' && image !== null) {
      try {
        const result = await client.add(image);
        console.log(result, result.cid);
        return `https://ethereumsp-front.infura-ipfs.io/ipfs/${result.path}`;
      } catch (error) {
        console.log('ipfs image upload error: ', error);
        return `error`;
      }
    } else {
      return null;
    }
  }

  async function salvarNft(account: string) {
    setIsLoading(true);
    const uri = await enviarImagem();
    console.log('uri', uri);
    const payload = {
      account, image: uri, description, name
    };
    const nftURI = await client.add(
      JSON.stringify(payload)
    );

    const nftURIFinal = `https://ethereumsp-front.infura-ipfs.io/ipfs/${nftURI.path}`;

    const apiResponse = await axios.post('http://localhost:5001/brunofsociety-4204c/us-central1/mintNft', {
      name: name,
      symbol: 'ETHSP',
      uri: nftURIFinal,
    });
    console.log(apiResponse.data);
    setIsLoading(false);
  }


  return <CreateNftContext.Provider value={{ isLoading, setIsLoading, enviarImagem, setName, setDescription, salvarNft, setImage }}>
    {children}
  </CreateNftContext.Provider>
}
