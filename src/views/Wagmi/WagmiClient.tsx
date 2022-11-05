import React from 'react';
import { WagmiConfig, createClient, chain } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { WagmiProfile } from './WagmiProfile';

const client = createClient(
  getDefaultClient({
    appName: 'ConnectKit CRA demo',
    chains: [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  }),
);

export const WagmiClient = ({ children }: { children: React.ReactNode }) => {
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
