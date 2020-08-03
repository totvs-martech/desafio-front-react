![](images/logo.svg)

## Teste Front-end react TOTVS Store

Este teste é apresentado aos candidatos as vagas de desenvolvimento front-end react para avaliar os conhecimentos técnicos.
Para esse desenvolvimento será necessário consumir a API da Marvel com dados de super heróis e histórias: https://developer.marvel.com/docs.

### Objetivo

Criar um aplicativo react com as seguintes características:
 - Listagem de super heróis.
   - Permitir filtrar informações da listagem.
 - Página com detalhes do super herói.
   - Deve apresentar uma listagem de histórias com um link para o detalhe.
 - Listagem de histórias.
   - Permitir filtrar por data.
 - Página com detalhes da história.
   - Deve apresentar uma listagem de heróis com um link para o detalhe.

Em cada página quanto maior o número de informações que apresentar da API melhor, porém lembre-se de deixar tudo claro e organizado.

Quanto a experiencia e o estilo da página fique a vontade para criar, recomendamos que utilize os resources e imagens fornecidos pela API da Marvel.

### Pré-requisito

 - Construir o projeto utilizando react.
 - Utilizar controle de estado com redux.
 - Implementar SSR (pode utilizar next).
 - Otimizações de SEO.
 - Criar o arquivo dockerfile para subir a aplicação.
 - Reutilização de componentes e centralização dos estilos.
 - Consumo de API rest.
 - Para as páginas com listagem criar mecanismo de paginação (limit/offset da api)

### Desejável

 - Utilizar monorepo (Lerna, Yarn Workspace ...).
 - styled-components, styled-system.
 - Responsividade do site para mobile.
 - Estrutura de thema.

### Referencias

 - Utilizar a API da Marvel como fonte de dados: https://medium.com/@renato.groffe/consumo-de-apis-em-net-core-utilizando-a-marvel-comics-api-ebe9cc858589.
 - Aplicação do Lerna com react e nextjs https://medium.com/frontend-digest/using-nextjs-in-a-monorepo-e011ff1826f5.
 - react + next + docker: https://dev.to/kumar_abhirup/next-js-docker-made-easy-2bok.
 - styled-components theming: https://styled-components.com/docs/advanced.

### Entrega deste projeto
 - Crie uma branch (tendo como origem a master) deste projeto e realize todo o desenvolvimento necessário dentro da pasta ./src.
 - Ao final crie um pull request para master e retorne o e-mail enviado com o esse desafio.
 - O prazo para entrega é 5 dias úteis após o recebimento do e-mail.
