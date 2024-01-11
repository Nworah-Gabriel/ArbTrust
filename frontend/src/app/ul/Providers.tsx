"use client";
import React, { ReactNode } from "react";
// import {useEffect} from 'react'
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
// import {
//   argentWallet,
//   trustWallet,
//   ledgerWallet,
// } from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {  lineaTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
// import { useAccount } from "wagmi";

//lets use the id this way for now. we will move it to '.env' on deployment.
const projectId = '400208dc5bbe17166594a12111c9fec6';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [ lineaTestnet],
  [publicProvider()]
);

const { wallets } = getDefaultWallets({
  appName: "Connect Wallet to Decertify",
  projectId,
  chains,
});


const connectors = connectorsForWallets([
  ...wallets,
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});


const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Providers;