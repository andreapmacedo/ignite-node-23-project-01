# rocket-node-project-01


Resume:

Node é uma plataforma para executar códigos JavaScript no lado do servidor. É um ambiente de execução JavaScript assíncrono orientado a eventos, projetado para construir aplicações escaláveis de rede. O Node.js representa uma nova geração de plataformas de desenvolvimento, baseadas em eventos e orientadas a I/O, que permitem a criação de aplicações altamente escaláveis e de alta performance.

O node roda a V8 do Google, que é um interpretador de JavaScript open source, que roda no Chrome. O Node.js é um projeto open source, multiplataforma, baseado no motor V8 do Google e que permite a execução de códigos JavaScript fora do navegador.

Entender sobre o Streaming e o Buffering, e como o Node.js trabalha com eles. Como o Node é assíncrono, ele não bloqueia o processo principal enquanto aguarda a resposta de uma requisição. 


#### Iniciando o projeto

```bash
npm init -y
```

> O comando npm init cria um arquivo package.json, que é um arquivo de configuração do projeto. Ele contém informações sobre o projeto, como nome, versão, descrição, dependências, scripts, etc. O parâmetro -y é opcional, mas ele faz com que o npm crie o arquivo package.json com as configurações padrão.

> Para o Node, normalmente utilizamos o arquivo server.js e não o index.js. 

#### Padrões de importação

// CommonJS => require (node)
// ES6 => import 

> Por padrão, o Node não suporta o uso de import/export. Para isso, podemos adiciona no package.json o seguinte código:

```json
  "type": "module"
```


#### Executando o projeto

```bash
node src/server.js
```

#### Node watcher

> apenas a partir da versão (19.8.1) do Node

```bash
node --watch src/server.js
```
#### Criar um Alias para o node watcher

```json
  "scripts": {
    "dev": "node --watch src/server.js"
  },
```
> Para executar o projeto, basta digitar:

```bash
npm run dev
```

#### Usando o HTTPie para testar a API

> Para instalar o HTTPie, basta digitar:

```bash
snap install httpie
```

> Para testar a API, basta digitar:

```bash
http :3333
```

> Testando o método GET

```bash
http POST localhost:3333/users
```


> Testando o método GET

```bash
http GET localhost:3333/users
```


