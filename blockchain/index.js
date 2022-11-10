const http = require('http');

//
const Blockchain = require("./src/blockchain");
const Block = require("./src/block");

const callChain = async function(res) {
  const blockchain = await new Blockchain();

  const block1 = new Block({ data: "Block #1" });
  await blockchain.addBlock(block1);
  const block2 = new Block({ data: "Block #2" });
  await blockchain.addBlock(block2);
  const block3 = new Block({ data: "Block #3" });
  await blockchain.addBlock(block3);

  blockchain.print(res);

}

const server = http.createServer( (req, res) => {
   res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
    res.write('<center><h1>>>Blockchain<<</h1></center> ')
     callChain(res);
    
}).listen(3000, () => console.log(`**Servidor Iniciado || Puerto ${3000}**`))
