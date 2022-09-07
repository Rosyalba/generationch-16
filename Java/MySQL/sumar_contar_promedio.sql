USE sakila;
SELECT * FROM payment;

-- SUM(), AVG(), COUNT()

SELECT customer_id, amount FROM payment;

-- COUNT () cuenta las filas de una tabla

SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;

-- Cantidad de rentas que tuvo el trabajador 2
SELECT COUNT(*) FROM payment WHERE staff_id = 1;

-- cantidad de clientes distintos
SELECT COUNT(DISTINCT customer_id) FROM payment;

/*
SUM()
*/
SELECT SUM(payment_date) AS 'Total de rentas' FROM payment;
SELECT SUM(payment_date) AS 'Total de rentas' FROM payment WHERE staff_id = 2;

-- Cual cliente realizo mas rentas ?
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) ASC;

-- group by -Agrupa solo si se usa con SUM, AVG y ACOUNT, pero omite los valores repetidos
-- order by - ordena segun la columna o funcion que le indiquemos ASC/DSC

SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM paymente GROUP BY staff_id;

 -- cual cliente gasto mas?
 
 SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total DESC;
 
 -- AVG () - Regresa el promedio
 SELECT AVG(amount) AS Promedio FROM payment;
 
 -- CUAL CLIENTE GASTO MAS EN PROMEDIO?
 SELECT customer_id, AVG (amount) FROM payment GROUP BY customer_id ORDER BY AVG(amount) DESC;
