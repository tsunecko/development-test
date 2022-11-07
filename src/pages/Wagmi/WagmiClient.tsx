import React from 'react';
import { WagmiConfig, createClient, chain } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { WagmiProfile } from './WagmiProfile';

interface WagmiClientProps {
  children: React.ReactNode;
}

const client = createClient(
  getDefaultClient({
    appName: 'ConnectKit CRA demo',
    chains: [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  }),
);

export const WagmiClient: React.FC<WagmiClientProps> = ({ children }) => {
  return (
    <div className="bg-white flex flex-col justify-center place-items-center h-screen">
      {client && (
        <WagmiConfig client={client}>
          <ConnectKitProvider theme="auto">
            <WagmiProfile />
            {children}
          </ConnectKitProvider>
        </WagmiConfig>
      )}
    </div>
  );
};
