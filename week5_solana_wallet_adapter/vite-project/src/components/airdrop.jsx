import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Connection } from "@solana/web3.js";

export function Airdrop (){

    //hooks in recat
    //the use wallet hook provides wallet varrible inside the airdrop component

    const wallet = useWallet();
    const {connection} = useConnection();

    async function SentAirdropToUser(){
        // alert("hi there")
        const ammount = document.getElementById('Publickey').value
        await connection.requestAirdrop(wallet.publicKey , ammount*1000000000);
        // 10 here is ampunt of klamports not soln 1sol = 10^9 lamports

        alert("Airdropped Sol");
    }
    return <>
    <div>
        {/* <>Hi from Airdrop, your pub key is {wallet.publicKey.toString()}</> */}
        
        <input id="Publickey" type="text" placeholder="Amount"></input>
        <button onClick={SentAirdropToUser}>Sent Airdrop</button>
    </div>
    </>
}