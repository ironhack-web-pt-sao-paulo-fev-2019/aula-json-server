// instanciando módulo json-server
const jsonServer = require('json-server');

// criando servidor
const server = jsonServer.create();
// configurando rota
const router = jsonServer.router('./db.json');

// adicionando bodyParser e router ao servidor
server.use(jsonServer.bodyParser);
server.use(router);

// iniciando servidor de dados fake ou mock
server.listen(3002, () => {
  process.stdout.write(`Mock Server up and running at 3002\n`);
});
