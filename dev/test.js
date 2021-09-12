const BLockchain = require("./blockchain");

const bitcoin = new BLockchain();

const prevBlockHash = "bnduyedggtd6dg";
const currentBlockData = [
    {
        amount: 100,
        sender: "bcbcyc6437463763",
        reciepent: "44ur7fhyfftgfgf"
    
    },
    {
        amount: 167,
        sender: "cbchcbrcgryrrr",
        reciepent: "rhcruhrygcrygcr"
    
    }
];

console.log(bitcoin.proofOfWork(prevBlockHash, currentBlockData));
