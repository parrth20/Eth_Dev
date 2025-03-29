
import './App.css'


// creating a decentralised app Dapp
//any app which is used to use our money which is in our wallet is called decntralised app
// Peer-to-peer (P2P) means computers (or users) connect directly to each other without needing a central server. Each participant (peer) can share, send, and receive data directly, like in file sharing or blockchain networks.

// wallet adapter is used in time to time to connect to a wallet which is present in out browser
//dapp asks wallet fot approval of transaction and if approved by walllet it signs the trasction 



//what does a dapp do?

// it fairly do 2 things
// send  a traansaction to blockchain
// sign a messgae verify ownership of a wallet(confirm transaction)



//step 1 go to solana wallet adapter docs




import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './components/airdrop';




function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
    {/* wrap it into providerenabling prop drilling using context api */}
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}> 
      {/* RPC url we have to put in connection provider */}
            <WalletProvider wallets={[]} autoConnect>
              {/* walltet provider is empty array cos is automatically detects wallets phantom backpack etc */}

                <WalletModalProvider>
                  <WalletMultiButton></WalletMultiButton> 
                  <WalletDisconnectButton></WalletDisconnectButton>
                  {/* this is premade wallet connnet/disconnet button component whicch we have used in imports */}
                    {/* <h1> hi there</h1> */}

                    <Airdrop/>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    </>
  )
}

export default App
