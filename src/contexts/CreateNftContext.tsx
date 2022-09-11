import * as React from 'react';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { Buffer } from 'buffer';
import { useEthers } from '@usedapp/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { providerPolygonMumbai } from '../utils/providers';
import { sleep } from './MinhasNftsContext';

export const CreateNftContext = React.createContext<any>({})

export default function CreateNftCtxProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

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
  const [networks, setNetworks] = React.useState<string[]>([]);
  const [description, setDescription] = React.useState("");


  async function keepCheckingTransaction(hash: string) {
    const status = await providerPolygonMumbai.getTransaction(hash);
    console.log('status', status);
    await status.wait();
    console.log('status 2', status);
    return status;
  }

  async function addNetwork(name: string) {
    const tempNetworks = [...networks, name];
    setNetworks(tempNetworks);
  }

  async function removeNetwork(name: string) {
    setNetworks(networks.filter((network) => network !== name));
  }

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
    Swal.fire({
      title: "Enviando...",
      text: "Aguarde, sua NFT esta sendo criada...",
      icon: "info",
      allowOutsideClick: false,
      showCloseButton: false,
      confirmButtonText: "OK",
      showConfirmButton: false,
    });
    setIsLoading(true);
    const uri = await enviarImagem();
    console.log('uri', uri);
    const payload = {
      account, image: uri, description, name, networks
    };
    const nftURI = await client.add(
      JSON.stringify(payload)
    );

    const nftURIFinal = `https://ethereumsp-front.infura-ipfs.io/ipfs/${nftURI.path}`;

    const apiResponse = await axios.post('http://localhost:5001/brunofsociety-4204c/us-central1/createNFT', {
      name: name,
      symbol: 'ETHSP',
      uri: nftURIFinal,
      networks: ['POLYGON']
    });
    Swal.close();
    Swal.fire({
      title: "Enviando...",
      text: "Aguarde, sua NFT esta sendo enviada para sua carteira...",
      icon: "info",
      allowOutsideClick: false,
      showCloseButton: false,
      confirmButtonText: "OK",
      showConfirmButton: false,
    });
    console.log(apiResponse.data);
    localStorage.setItem('transaction', JSON.stringify({ name, symbol: 'ETHSP', uri: nftURIFinal, hash: apiResponse.data.hashes['POLYGON'], networks }))
    const res = await keepCheckingTransaction(apiResponse.data.hashes['POLYGON'])
    console.log('creates', (res as any).creates);
    const mintApiResponse = await axios.post(
      'http://localhost:5001/brunofsociety-4204c/us-central1/mintAndTransfer',
      { protocol: 'POLYGON', token: (res as any).creates, account: account, uri: nftURIFinal });
    Swal.close();
    const res2 = await keepCheckingTransaction(mintApiResponse.data.hash);
    Swal.fire(
      'NFT Criada!',
      'Voce criou sua NFT nas redes selecionadas!',
      'success'
    )
    navigate(window.location.pathname + 'minhas-nfts', { replace: true });
    setIsLoading(false);
  }

  console.log('networks', networks)

  return <CreateNftContext.Provider value={{ isLoading, setIsLoading, enviarImagem, setName, setDescription, salvarNft, setImage, addNetwork, removeNetwork }}>
    {children}
  </CreateNftContext.Provider>
}
