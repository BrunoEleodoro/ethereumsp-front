import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HeaderResponsive } from "./components/Header";
import CreateNftCtxProvider from "./contexts/CreateNftContext";
import About from "./pages/about/About";
import { CreateNFT } from "./pages/CreateNft";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderResponsive links={[
          {
            link: '/about',
            label: 'About'
          }
        ]} />
      </div>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path={process.env.PUBLIC_URL + "/about"} element={<About />} />
        <Route path={process.env.PUBLIC_URL + "/create"} element={
          <CreateNftCtxProvider>
            <CreateNFT />
          </CreateNftCtxProvider>
        } />
      </Routes>
    </BrowserRouter>
  );
}

