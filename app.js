import tabela2024 from './tabela.js';

// O express permite configurar um servidor
// um servidor entrega requisições http para o usuário
// http é um padrão de comunicação da internet que consiste entre pedido e resposta
import express from 'express';

// Configurando um servidor
const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.send(tabela2024);
});

app.listen(300, () => console.log('Servidor rodando com sucesso'));