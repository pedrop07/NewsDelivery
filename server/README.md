
# News Delivery API

Uma API de listagem de notícias, onde é possível criar, editar e excluir notícias.

### Descrição técnica

Uma API desenvolvida com Laravel, Docker e PostgreSQL.
## Rodando localmente

Para rodar a aplicação localmente em sua máquina, você devera seguir os seguintes passos:

1. Primeiramente, você precisa ter o [PHP](https://www.php.net), [Composer](https://getcomposer.org) e [Docker](https://www.docker.com) instalados. Recomendo ter alguma ferramenta que ofereça uma interface gráfica para visualização dos dados sendo persistidos no banco, como, por exemplo, o [DBeaver](https://dbeaver.io).

2. Abra o seu terminal de preferência e execute a seguinte sequência de comandos:


```bash
  git clone https://github.com/pedrop07/NewsDelivery.git

```

Entre no diretório do projeto e Copie variáveis de ambiente do arquivo `.env.example` para um arquivo `.env`

```bash
  cd NewsDelivery/server
```

Suba os containers do projeto

```bash
  docker-compose up -d
```

Instale as dependências

```bash
  composer install
```

Para executar todas as suas migrações pendentes, execute o comando:

```bash
  php artisan migrate
```

Inicie o servidor

```bash
  php artisan serve
```

Após seguir esses passos, você terá acesso à API através da rota  `http://localhost:8000/api/news`. Com ela, será possível criar, editar, deletar e visualizar notícias que são armazenadas na tabela chamada `news` do banco de dados `apinews`.


## Documentação da API

#### Retorna todas notícias

```http
  GET /api/news
```

#### Retorna uma notícia

```http
  GET /api/news/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da notícia que você deseja |

#### Cria uma notícia

```http
  POST /api/news
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. Título da notícia criada |
| `author`      | `string` | **Obrigatório**. Autor da notícia criada |
| `content`      | `string` | **Obrigatório**. Conteúdo da notícia criada |
| `release_date`      | `DateTime` | **Obrigatório**. Data de publicação da notícia criada |

#### Atualiza uma notícia

```http
  PATCH /api/news/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da notícia que você deseja |

**Pelo menos 1 campo deve ser enviado.**

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Opcional**. Título da notícia criada |
| `author`      | `string` | **Opcional**. Autor da notícia criada |
| `content`      | `string` | **Opcional**. Conteúdo da notícia criada |
| `release_date`      | `DateTime` | **Opcional**. Data de publicação da notícia criada |


#### Deleta uma notícia

```http
  DELETE /api/news/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da notícia que você deseja |



