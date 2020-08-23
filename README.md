# desafio
Desafio Greenmile

Para implementar o desafio proposto, foram utilizadasas seguintes ferramentas:
- cypress, versão 5
- cypress-iframe - para interagir com o componente dentro do iframe no componente
- config chromeWebSecurity setada como false, para evitar conflitos do cross origin dentro do iframe

Para executar os testes do projeto, é necessário:
- Instalar o NodeJS
- Abrir o cypress, selecionar a spec criada e verificar sua execução

Considerações
Apesar do "clicar e segurar" estar implementado, ele não está funcionando como deveria, pois a biblioteca hammerjs tem algumas limitações para alguns eventos. como os de "press"
Uma solução seria, utiliza outra biblioteca que evitasse essas limitações.
