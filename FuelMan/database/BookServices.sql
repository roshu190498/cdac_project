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
-- Table structure for table `BookServices`
--

DROP TABLE IF EXISTS `BookServices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BookServices` (
  `userId` int(11) DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `service` varchar(200) DEFAULT NULL,
  `mobileNo` varchar(20) DEFAULT NULL,
  `userEmailId` varchar(22) DEFAULT NULL,
  `vehicleNo` varchar(22) DEFAULT NULL,
  `msg` varchar(100) DEFAULT NULL,
  `vehicleType` varchar(20) DEFAULT NULL,
  `choice` varchar(20) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vendorId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BookServices`
--

LOCK TABLES `BookServices` WRITE;
/*!40000 ALTER TABLE `BookServices` DISABLE KEYS */;
INSERT INTO `BookServices` VALUES (1,'pune','puncture','545','user@gmail.com','mh31cd2992','request first','two wheeler','yes',1,1),(2,'pune','puncture','5225','user1@gmail.com','mh31cd2992','request first','two wheeler','yes',3,2),(32,'2','Puncture','3','4','6','7','5','yes',4,10),(32,'pune','Lockout','8855','user1@gmail.com','mh 31 dc 3890','early as possible ','two wheerler','yes',5,10);
/*!40000 ALTER TABLE `BookServices` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-27  2:34:24
