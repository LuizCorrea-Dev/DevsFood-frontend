BASE: [https://api.b7web.com.br/devsfood/api]

## testa conectividade com a API
    GET /api/ping

## fazer Login
    POST /api/login (email, password)  --(recebe um token, guardado no redux)--
## fazer Logout
    GET */api/logout

## criar novo usuário
    POST /api/user (name, email, password)
## Puxa dados do usuário (LOGADO)
    GET */api/user   
## Alterar informação  (LOGADO)
    PUT */api/user ([name, email, password, password_confirm, newaddress])

## Puxa as categorias
GET /api/categories

## Puxa os produtos
GET /api/products ([search, page, category])
## Puxa um produto expecífico
GET /api/product/123 

GET /api/deliverycalc ([id_address, street1, zipcode, city, state])
GET /api/cupom (code)

## Puxar pedidos do usuário (LOGADO)
    GET */api/user/orders
## Puxar um pedido expecífico (LOGADO)
    GET */api/user/order/123

## Criando um pedido (LOGADO)
    POST */api/user/order (id_address, cupom, products[id, qt], payment_type, delivery_cost, delivery_time)
## Alterando informações de um pedido expecífico (LOGADO)
    PUT */api/user/order/123 ([payment_data, payment_status, process_status])





Legenda:
* = endpoint precisa de auth - metodo JWT

Formas de envio do AUTH:
- Authorization: Bearer TOKEN
- QueryString token: TOKEN

GET - pegar informações
POST  - adicionar informações
PUT - alterar dados
