-- SHOW DATABASES;
USE tienda;
DROP DATABASE tienda;
CREATE DATABASE tienda;
CREATE TABLE clientes( 
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR(150) NOT NULL
);

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES('Pedro', 'Paramo', '12345678', 'Comala'),
('Gatos', 'Manchitas', '12345678', 'Comala'),
('Sr.Bigotes', 'Patitas', '12345678', 'Comala');
SELECT * FROM clientes;
DELETE FROM clientes
WHERE cliente_id = 13;

DELETE FROM clientes
WHERE nombre= 'Pedro';