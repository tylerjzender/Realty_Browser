-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: realtydb
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `property`
--

DROP TABLE IF EXISTS `property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `property` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `acreage` float NOT NULL,
  `bathrooms` float NOT NULL,
  `bedrooms` int NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `garage_space` int NOT NULL,
  `listing_type` varchar(255) DEFAULT NULL,
  `price` int NOT NULL,
  `property_code` varchar(255) DEFAULT NULL,
  `property_type` varchar(255) DEFAULT NULL,
  `second_address` varchar(255) DEFAULT NULL,
  `square_foot` float NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `street_address` varchar(255) DEFAULT NULL,
  `thumbnail_link` varchar(255) DEFAULT NULL,
  `year_built` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property`
--

LOCK TABLES `property` WRITE;
/*!40000 ALTER TABLE `property` DISABLE KEYS */;
INSERT INTO `property` VALUES (5,0.28,0,0,'Ward',0,'Sale',100000,'1fdf14b4-7173-42c4-9c57-23b583cd9029','Single Family','',357,'CO','3106 County Road','https://i.imgur.com/GdYKGeh.jpg',1950),(6,0.04,2.5,3,'San Jose',2,'Sale',849000,'897d3f2c-3731-4eb0-a436-c5b6acc0e5a6','Multi Family','',1559,'CA','426 Branham Lane East','https://i.imgur.com/dCCevV4.jpg',1989),(7,0.31,4.5,6,'Marquette',2,'Sale',1265000,'c9dc6137-0814-4d9a-8846-06477c07fda1','Single Family','',6829,'MI','424 Cedar Street','https://i.imgur.com/JS2OXHI.jpg',1882),(8,0.14,2,3,'Tacoma',0,'Sale',675000,'debf7206-c5fb-4d0e-af40-2c397cbfacb4','Single Family','',1734,'WA','3502 North Gove Street','https://i.imgur.com/kYW6oXj.jpg',1979),(9,0.07,2,7,'Watervliet',0,'Sale',239000,'be7debeb-896e-46aa-a12e-952a4232f3e0','Multi Family','',2356,'NY','2328 3rd Avenue','https://i.imgur.com/sEUm7sA.jpg',1940),(10,0.17,2,3,'Urbana',2,'Sale',249900,'a2d538c8-1c32-4cad-b3da-56c400885c6c','Single Family','',1402,'IL','1705 East Vernon Drive','https://i.imgur.com/eb5k2OG.jpg',2020),(11,0,1,0,'Brooklyn',0,'Lease',2350,'b358f665-8a93-4642-bb3b-3c7056de79fe','Single Family','Unit 529',800,'NY','123 Melrose Street','https://i.imgur.com/axVBolW.jpg',2019),(12,0,1,0,'Seattle',0,'Lease',1999,'dcb8180b-cdda-4be7-9e95-a82e4fb6e6b9','Single Family','Unit AS614',485,'WA','118 Broadway East','https://i.imgur.com/tIbUGu5.jpg',0),(13,0,1,1,'Seattle',0,'Lease',2820,'a94cdb0f-2767-43d0-9be4-1d44e4c97b66','Single Family','Unit 403',860,'WA','4040 26th Avenue Southwest','https://i.imgur.com/c1lSBee.jpg',0),(14,0,1,2,'Vancouver',0,'Lease',2239,'ac87cd79-a789-40c0-82cc-50e09296d64b','Single Family','Unit 530',786,'WA','636 West 6th Street','https://i.imgur.com/fseWa9r.jpg',0);
/*!40000 ALTER TABLE `property` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-06 10:19:05
