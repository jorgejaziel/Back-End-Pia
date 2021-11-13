# Back-End-Pia

# Primer Avance del PIA
## Equipo

- **Brandon Alexis Gloria Robles 1873724**
- **Jorge Jaziel Carreón Guajardo	1734228**

# Introducción

### ¿Cuál es la problemática o proceso que resolveremos o mejoraremos con una API?.

>Nuestra compañera Elisa, ella al igual que muchas personas a empezado su viaje en este mundo del emprendimiento,  realizando sus ventas por las redes sociales, llevando control de su inventario y precios por medio de un bloc de notas en su teléfono móvil, y sus clientes solo tienen la posibilidad de saber su inventario y precios por medio de un dm directo a las redes sociales de ella.
**En los últimos meses Elisa ha tenido una mayor demanda por lo que llevar el control de su inventario ha sido más difícil y  aparte quiere empezar a contratar personal para trabajar con ella.**

# Propuesta técnica 

### ¿Qué entidades y funcionalidades realizará la API para proveer un servicio útil?

> Tendremos la entidad de User que tendrá como atributos id, usuario, contraseña y nombre, algunas de sus funcionalidades será
>validar el usuario en nuestra base de datos y también saber que usuario está haciendo movimientos. Estará también la entidad
Venta con atributos como venta id, producto id y user id, estos dos últimos son claves foráneas de otras entidades. 
Porúltimo, tenemos la entidad Marca con los atributos marca id y nombre, y la entidad Product, con los atributos producto id, 
nombre, monto, cantidad, marca id como clave foránea, y tamaño, estas últimas entidades tendrán como función ir almacenando 
en nuestra base de datos los productos, así como la marca de la mercancía. 
La base de datos que utilizaremos será sqlite3.
esto ya que hemos decidido utilizar como lenguaje de programación typescript para nuestro pía.

# Diagrama UML

![Diagrama UML](https://i.ibb.co/2yhZTFK/Captura2.png)

# Diagrama Entidad-Relación

![Diagrama Entidad Relación](https://i.ibb.co/ZRs9RqQ/entidad-relacion.png)
