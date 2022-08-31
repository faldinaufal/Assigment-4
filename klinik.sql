CREATE USER IF NOT EXISTS `farhan`@`localhost` IDENTIFIED WITH mysql_native_password BY '123456';

GRANT ALL PRIVILEGES ON `farhan`.* TO `farhan`@`localhost` WITH GRANT OPTION;

CREATE DATABASE IF NOT EXISTS `KlinikMedika`;

CREATE TABLE IF NOT EXISTS `Obat` (
  `namaObat` varchar(255) NOT NULL,
  `jumlahObat` int NOT NULL,
  `hargaObat` int NOT NULL,
)

CREATE TABLE IF NOT EXISTS `UserData` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
)