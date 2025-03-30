// [52,13,129,93,1,149,46,106,66,49,167,201,202,39,67,87,167,168,29,88,194,43,58,19,149,18,38,41,130,52,253,202,238,227,88,33,213,223,173,185,121,231,67,221,140,176,16,70,234,116,101,135,176,59,219,12,95,186,4,174,30,96,149,42]
// this is private key for test wallet containg some sol



const { Keypair, Connection, SystemProgram, Transaction } = require('@solana/web3.js');

const payer = Keypair.fromSecretKey(Uint8Array.from([52,13,129,93,1,149,46,106,66,49,167,201,202,39,67,87,167,168,29,88,194,43,58,19,149,18,38,41,130,52,253,202,238,227,88,33,213,223,173,185,121,231,67,221,140,176,16,70,234,116,101,135,176,59,219,12,95,186,4,174,30,96,149,42])); //payer is person who paying for this transaction 


const connection = new Connection("https://api.devnet.solana.com"); //rpc url

async function main() {
    const newAccount = Keypair.generate(); //creates a fresh account on blockchain which has no money intially

    const TOTAL_BYTES = 165; //this is how many btyes data we want to store
    const lamports = await connection.getMinimumBalanceForRentExemption(TOTAL_BYTES); //this is on that bytes above how many rent is needed 

    const transaction = new Transaction(); //creating a new tramnsation below are instruction to transfer
    transaction.add(
        SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: newAccount.publicKey,


            lamports: lamports, //mini lamports req for rent exemption
            space: TOTAL_BYTES, //total space of data we want to assing to account
            programId: SystemProgram.programId, //owner ka system program
        }),
    );

    await connection.sendTransaction(transaction, [payer,newAccount]); //this sends transaction has inputs as recivers and sender's array basically this is signning of transaction

    console.log(`Transferred to  ${newAccount.publicKey.toBase58()}`); //logged the public key of new account so that we can check in solana explorer that transction is completed or not 


}


// if we deploy a program on solana blockchain probably smart contracts it's owner will be bpf loader program on solana blockchain

main();

