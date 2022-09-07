SELECT * FROM payment;

-- El titulo de peliculas con el idioma que tienen
SELECT title, name FROM film, language;

-- cuantas peliculas estan hechas en un mismo idioma? 1000 peliculas
SELECT SUM(language_id) AS 'FILM MISMO IDIOMA' FROM film;

-- Las direcciones de cada pais

-- Las direcciones de cada país:
SELECT address, district FROM address ORDER BY district ASC;

SELECT address, district, postal_code, location FROM address ;
/* SELECT country, city, a.address, a.address2, s.first_name, s.last_name
FROM country co, city c, address, staff s
WHERE co.country_id = c.country_id 
AND a.city_id = c.city_id 
AND s.address_id = a.address_id */

--  El monto que pago un cliente por rentas de peliculas el dia 2005-06-15

SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;

SELECT * FROM payment;
SELECT customer_id, AVG (amount) FROM payment WHERE payment_date = '2005-06-15';

------
-- Mostar las direcciones de cada pais
USE sakila;

/* Address - cty_id / address
city - city_id / city / country_id
country - country_id / country
*/

SELECT 
address.address,
city.city,
city.country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;

SELECT
country.country AS Pais,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON  city.country_id = country.country_id
INNER JOIN address ON address.city_id = city.city_id;

