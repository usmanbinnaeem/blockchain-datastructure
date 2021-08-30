const sha256 = require("sha256");

function BLockchain() {
  this.chain = [];
  this.pendingTransactions = [];
  this.createNewBlock(75564, "0", "0")
}

BLockchain.prototype.createNewBlock = function (nonce, prevBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transations: this.pendingTransactions,
    nonce: nonce,
    prevBlockHash: prevBlockHash,
    hash: hash,
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
};

BLockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
};

BLockchain.prototype.createNewTransaction = function (
  amount,
  senderAddress,
  reciepentAddress
) {
  const newTransaction = {
    amount: amount,
    sender: senderAddress,
    reciepent: reciepentAddress,
  };

  this.pendingTransactions.push(newTransaction);

  return this.getLastBlock()["index"] + 1;
};

BLockchain.prototype.hashBlock = function (
  previousBlockHash,
  currentBlockData,
  nonce
) {
  const dataAsString =
    previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
};

BLockchain.prototype.proofOfWork = function (
  previousBlockHash,
  currentBlockData
) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);

  while (hash.substring(0, 4) !== "0000") {
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    console.log(nonce, hash);
  }

  return nonce;
};

module.exports = BLockchain;
