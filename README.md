# Serviço de disparo de Emails

> Esse projeto é um clone [deste repositório](https://github.com/guivahl/redis-dba) com algumas adições de funcionalidades.


## Tecnologias utilizadas

- [Redis](https://redis.io/)
- [NodeJs](https://nodejs.org/)
    - [Bull](https://github.com/OptimalBits/bull)
    - [AWS.SES](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#constructor-property)

## Como executar

1. Clone o repositório e entre na pasta
2. Instale os pacotes utilizando o comando `npm install`
3. Crie um arquivo `.env` na raiz do projeto e insira suas credencias. Utilize o arquivo `.env.example` como base.
4. Rode o projeto com o comando `npm start`

### Frontend

Você pode executar o Frontend para se comunicar com essa aplicação através de requisiçõs HTTP:

1. Clone esse [repositório](https://github.com/Fernanda-Kipper/membership-frontend) e siga o passo a passo.