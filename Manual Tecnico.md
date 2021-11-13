# Manual Tecnico
## Users

- Metodo GET

Parametro url:
```sh
http://localhost:3000/user
```
![Get User](https://i.ibb.co/wsw6rXB/Get-User.png)

- Metodo GET

Parametro url:
```sh
http://localhost:3000/user/id
```
![Get User](https://i.ibb.co/z4Mffrk/Get-User-id.png)

- Metodo POST

Parametros del url:
```sh
http://localhost:3000/user
```
Parametro del body:
```sh
{
    "userName": "Jorge Jaziel1",
    "password": "12345"
}
```
![Get User](https://i.ibb.co/4Mm9YXc/Post-User.png)

- Metodo PUT

Parametros del url:
```sh
http://localhost:3000/user/id
```
Parametro del body:
```sh
{
    "userName": "Brandon Robles",
    "password": "56789"
}
```
![Get User](https://i.ibb.co/K6M33pS/Put-User-id.png)

- Metodo DELET

Parametro url:
```sh
http://localhost:3000/user/id
```
![Get User](https://i.ibb.co/HHgRPDw/Delete-User-id.png)

## Sales

- Metodo GET

Parametro url:
```sh
http://localhost:3000/sales
```
![Get User](https://i.ibb.co/RQJnx2t/Get-Sales.png)

- Metodo GET

Parametro url:
```sh
http://localhost:3000/sales/id
```
![Get User](https://i.ibb.co/n31r3k6/Get-Sales-id.png)

- Metodo POST

Parametros del url:
```sh
http://localhost:3000/sales
```
Parametro del body:
```sh
{
    "product": {
            "productId": 1,
            "name": "air force 1",
            "price": "1,250",
            "quantity": 10,
            "size": "10.5"
    }
}
```
![Get User](https://i.ibb.co/0jtpFvq/Post-Sales.png)

- Metodo PUT

Parametros del url:
```sh
http://localhost:3000/sales/id
```
Parametro del body:
```sh
{
    "product": {
            "productId": 1,
            "name": "air force 1",
            "price": "1,000",
            "quantity": 2,
            "size": "10.5"
    }
}
```
![Get User](https://i.ibb.co/b2nBd73/Put-Sales-id.png)

- Metodo DELET

Parametro url:
```sh
http://localhost:3000/sales/id
```
![Get User](https://i.ibb.co/T83C8jL/Delete-Sales-id.png)

## Product

- Metodo GET

Parametro url:
```sh
http://localhost:3000/product
```
![Get User](https://i.ibb.co/DGfNWd4/Get-Products.png)

- Metodo GET

Parametro url:
```sh
http://localhost:3000/product/id
```
![Get User](https://i.ibb.co/0nFWJfG/Get-Product-id.png)

- Metodo POST

Parametros del url:
```sh
http://localhost:3000/product
```
Parametro del body:
```sh
{
    "name": "cortez",
    "price": "3,000",
    "quantity": 5,
    "size": "8"
}
```
![Get User](https://i.ibb.co/F6Cs2cW/Post-Product.png)

- Metodo PUT

Parametros del url:
```sh
http://localhost:3000/product/id
```
Parametro del body:
```sh
{
    "name": "Cortez",
    "price": "3,500",
    "quantity": 3,
    "size": "8"
}
```
![Get User](https://i.ibb.co/2Y70d30/Put-Product.png)

- Metodo DELET

Parametro url:
```sh
http://localhost:3000/product/id
```
![Get User](https://i.ibb.co/4wb6V9q/Delete-Product.png)

## Brand

- Metodo GET

Parametro url:
```sh
http://localhost:3000/brand
```
![Get User](https://i.ibb.co/6Y9NtTW/Captura-de-pantalla-53.png)

- Metodo GET

Parametro url:
```sh
http://localhost:3000/brand/id
```
![Get User](https://i.ibb.co/FW88GCM/Captura-de-pantalla-54.png)

- Metodo POST

Parametros del url:
```sh
http://localhost:3000/brand
```
Parametro del body:
```sh
{
    "name": "Charly"
}
```
![Get User](https://i.ibb.co/dbBbZCr/Captura-de-pantalla-55.png)

- Metodo PUT

Parametros del url:
```sh
http://localhost:3000/brand/id
```
Parametro del body:
```sh
{
    "name": "Charli"
}
```
![Get User](https://i.ibb.co/Snrbkbd/Captura-de-pantalla-57.png)

- Metodo DELET

Parametro url:
```sh
http://localhost:3000/product/id
```
![Get User](https://i.ibb.co/VQqrbf7/Captura-de-pantalla-58.png)