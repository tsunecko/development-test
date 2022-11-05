import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Root } from './components/routing/root';
import { WagmiClient } from './views/Wagmi/WagmiClient';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}
const root = ReactDOM.createRoot(rootElement);

root.render(
  <WagmiClient>
    <Root />
  </WagmiClient>,
);
