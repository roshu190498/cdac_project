-- MySQL dump 10.13  Distrib 8.0.17, for Linux (x86_64)
--
-- Host: localhost    Database: project_db
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `vendors`
--

DROP TABLE IF EXISTS `vendors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendors` (
  `vendorId` int(11) NOT NULL AUTO_INCREMENT,
  `vendorName` varchar(200) NOT NULL,
  `vendorLocation` varchar(200) NOT NULL,
  `vendorAddress` varchar(200) NOT NULL,
  `vendorImages` varchar(5000) NOT NULL,
  `vendorRatings` int(11) NOT NULL,
  `vendorLicNo` varchar(100) NOT NULL,
  `vendorEmailId` varchar(100) NOT NULL,
  `vendorMobileNo` varchar(10) NOT NULL,
  PRIMARY KEY (`vendorId`),
  UNIQUE KEY `vendorEmailId_UNIQUE` (`vendorEmailId`),
  UNIQUE KEY `vendorMobileNo_UNIQUE` (`vendorMobileNo`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendors`
--

LOCK TABLES `vendors` WRITE;
/*!40000 ALTER TABLE `vendors` DISABLE KEYS */;
INSERT INTO `vendors` VALUES (8,'vendor','pune','pune','ef2bf0246c741154dc08ee086a73bbf8',3,'skdljf','vendor@gmail.com','5555'),(10,'vendor1','pune','pune','28f5d8ec092eaf5e05b0ac2f9fec8b5d',9,'sajdfh','vendor1@gmail.com','552223'),(13,'vendor3','pune','pune','af707f0947ef9ad3025a55fea902e1b8',7,'klsfadjjklfds','vendor3@gmail.com','7744552'),(14,'vendor4','nagpur','nagpur','6e607dfbf55d236d71376052c8260cbe',8,'slf;adk','vendor4@gmail.com','7889');
/*!40000 ALTER TABLE `vendors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-27  2:30:00
