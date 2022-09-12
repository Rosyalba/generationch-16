USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Alias
SELECT 5 +5;

SELECT Name AS Nombre_de_pais, Population AS 'Poblacion del pais' FROM country ORDER BY Nombre_de_pais DESC;

SELECT DISTINCT Continent FROM country; -- BASICAMENTE DISTINCT filtra los datos repetidos

-- WHERE Clausula
SELECT * FROM country WHERE LifeExpectancy < 50 ORDER BY LifeExpectancy DESC;
SELECT * FROM country WHERE Continent != 'North America' ORDER BY Continent ASC;
-- Between
-- SE UTILIZA JUNTO CON WHERE

SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;
SELECT * FROM country WHERE Population NOT BETWEEN 50000000 AND 70000000 ORDER BY Population DESC;

-- OR/ AND -- OPERADORES LOGICOS
SELECT * FROM country WHERE Continent = 'Asia' OR Continent = 'Europe' OR Continent;
SELECT * FROM country WHERE Continent = 'Asia' AND Continent = 'Europe' AND Continent;

-- operador insert
SELECT * FROM country WHERE Continent IN ('Asia', 'Europe', 'North America') ORDER BY Continent ;
SELECT * FROM country WHERE IndepYear IS NULL;

-- LIKE sirve para buscar un patron en especifico
-- '%' buscar cualquier cantidad de caracteres
-- '_' especificamos un caracter
SELECT * FROM country WHERE Name LIKE '%and%';
SELECT * FROM country WHERE Name LIKE '%e_a';
SELECT * FROM country WHERE Continent LIKE 'Asia'