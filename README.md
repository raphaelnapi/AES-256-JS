# AES-256-JS
Aplicação Web em JavaScript para criptografar e decriptografar mensagens de texto utilizando a cifra AES 256

# CryptoJS
Biblioteca utilizada para padrões de criptografia: CryptoJS [Github](https://github.com/brix/crypto-js)

# Considerações de segurança
1. A aplicação em JavaScript roda no lado do cliente (navegador), dessa forma não envia os dados (chave, mensagem em claro e mensagem cifrada) na rede. Pode, inclusive, após a página ter sido acessada, ser executada em modo avião.
2. Foi introduzido um Vetor de Inicialização totalmente aleatório para aumentar a segurança da cifra AES. Não foi permitido que o usuário altere o IV por motivo de praticidade.
