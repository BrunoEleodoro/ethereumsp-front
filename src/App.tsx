import { useEthers } from "@usedapp/core";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HeaderResponsive } from "./components/Header";
import CreateNftCtxProvider from "./contexts/CreateNftContext";
import MinhasNftsCtxProvider from "./contexts/MinhasNftsContext";
import About from "./pages/about/About";
import { CreateNFT } from "./pages/CreateNft";
import Home from "./pages/home/Home";
import MinhasNfts from "./pages/minhas-nfts/MinhasNfts";

export default function App() {
  const { account } = useEthers();
  return (
    <BrowserRouter>
      <div>
        <HeaderResponsive links={account ? [
          {
            link: '/create',
            label: 'Criar NFT'
          },
          {
            link: '/dashboard',
            label: 'Dashboard'
          },
          {
            link: '/minhas-nfts',
            label: 'Minhas Nfts'
          },
          {
            link: '/about',
            label: 'Sobre'
          },
        ] : [{
          link: '/about',
          label: 'Sobre'
        }]} />
      </div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/create"} element={
          <CreateNftCtxProvider>
            <CreateNFT />
          </CreateNftCtxProvider>
        } />
        <Route path={"/minhas-nfts"} element={
          <MinhasNftsCtxProvider>
            <MinhasNfts />
          </MinhasNftsCtxProvider>
        } />

      </Routes>
    </BrowserRouter>
  );
}

