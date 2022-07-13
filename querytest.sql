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
'Luis',
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
'Jose',
'Pendiente',
'Tarea 2',
1657710742);
