CREATE DATABASE `activitymanager` /*!40100 DEFAULT CHARACTER SET latin1 */;
CREATE TABLE `actividades` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `empleado` varchar(60) NOT NULL,
  `status` varchar(60) NOT NULL,
  `name` varchar(60) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
INSERT INTO `activitymanager`.`actividades`
(`id`,
`empleado`,
`status`,
`name`,
`timestamp`)
VALUES
(
'Carlos Angulo',
'Pendiente',
'Tarea 1',
1657710742);
INSERT INTO `activitymanager`.`actividades`
(`id`,
`empleado`,
`status`,
`name`,
`timestamp`)
VALUES
(
'Jose Guarecuco',
'Pendiente',
'Tarea 2',
1657710742);

CREATE TABLE `empleados` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;


INSERT INTO `activitymanager`.`empleados`
(
`name`)
VALUES
(
'Jose Guarecuco');

INSERT INTO `activitymanager`.`empleados`
(
`name`)
VALUES
(
'Carlos Angulo');

INSERT INTO `activitymanager`.`empleados`
(
`name`)
VALUES
(
'Victor Garcia');


