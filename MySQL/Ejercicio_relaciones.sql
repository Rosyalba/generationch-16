CREATE DATABASE EjercicioClase;
USE EjercicioClase;
CREATE TABLE cohorte(
cohorte12_id INT NOT NULL PRIMARY KEY,
alumnos_id INT NOT NULL,
numero_alumnos INT NOT NULL,
horario VARCHAR (255) NOT NULL,
tipo_sesiones VARCHAR (255) NOT NULL,
ciudad VARCHAR(255) NOT NULL
 );

 
 -- relaciones
 ALTER TABLE cohorte
 ADD CONSTRAINT fk_cohorte_Alumno
 FOREIGN KEY (alumnos_id)
 REFERENCES Alumno (alumno_id);
 
 ALTER TABLE cohorte
 ADD CONSTRAINT fk_equipo_alumno
 FOREIGN KEY (alumnos_id)
 REFERENCES  ;
 -- se le agregara info a las tablas que no tienen llaves foraneas
 -- alumno e instructor
 
 -- INSERT INTO alumno (nombre, edad, CURP, RFC, 

CREATE TABLE direccion(
direccions_id INT NOT NULL PRIMARY KEY,
alumno_id INT NOT NULL,
calle VARCHAR(255) NOT NULL,
pais VARCHAR(255) NOT NULL,
cp INT NOT NULL
);

INSERT INTO direccion
VALUES (direccion_id, alumno_id, calle, pais, cp),
(0009, 90, 'Miguel Hidalgo 90 ', 'Mexico', 66890),
(0086, 78, 'Corregidora 45', 'Mexico', 99880);

CREATE TABLE Alumno (
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
CURP VARCHAR(255) NOT NULL,
RFC VARCHAR(255),
nivel_ingles VARCHAR(255) NOT NULL,
amonestaciones INT NOT NULL
);

CREATE TABLE Instructor(
instructor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
edad INT NOT NULL,
cumpleanios DATE NOT NULL,
RFC VARCHAR(255) NOT NULL,
supervisor VARCHAR(255) NOT NULL,
sesiones VARCHAR(255) NOT NULL
);

CREATE TABLE Equipo( 
equipo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
alumno_id INT NOT NULL,
nombre VARCHAR(255) NOT NULL,
cantidad_intengrantes INT NOT NULL,
logo VARCHAR(255) NOT NULL  );