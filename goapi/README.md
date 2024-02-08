# **✨ Como executar**

**Para o correto funcionamento deste projeto, é necessário tê-lo aberto localmente em sua máquina e com o terminal acessado no projeto. Execute os seguintes comandos no terminal de sua escolha:**

> GO
>
> - Execute `docker compose up` para subir o banco de dados.
> - Para instalar os pacotes pendentes `go mod tidy`.
> - Execute `cd cmd/catalog` para acessar a pasta onde está o main.
> - Execute `go run main.go` ou `go run cmd/catalog/main.go`_(sem necessidade de realizar o passo anterior)_ para iniciar o servidor.

> DOCKER
>
> - Para inicializar `docker-compose up -d` (caso dê erro abra o docker desktop e reinicie ele).
> - Execute `docker-compose exec mysql bash` para criar um container.
> - Execute `mysql -uroot -p imsersao17` para conectar com o banco.
> - Execute a senha `root` para acessar.
> - Execute o código do arquivo **[db.sql](./db.sql)** para criar as tabelas.
> - Execute `show tables;` para visualizar as tabelas que foram criadas.
> - Execute `select * from [nome da tabela];` para visualizar os dados de uma tabela específica.