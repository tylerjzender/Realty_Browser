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
-- Table structure for table `property_image`
--

DROP TABLE IF EXISTS `property_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `property_image` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image_link` varchar(255) DEFAULT NULL,
  `property_id` bigint DEFAULT NULL,
  `property_image_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property_image`
--

LOCK TABLES `property_image` WRITE;
/*!40000 ALTER TABLE `property_image` DISABLE KEYS */;
INSERT INTO `property_image` VALUES (5,'https://i.imgur.com/QBd32Xw.jpg',5,'d4f2c335-dbef-4009-af6d-3b24874433cb'),(4,'https://i.imgur.com/HE8BOjR.jpg',5,'14441829-6e6b-4717-8ac6-d556ec920ab9'),(6,'https://i.imgur.com/Qk3NP9M.jpg',5,'30b6fb64-66bc-45f8-9e46-471cba97a17a'),(7,'https://i.imgur.com/pgxlQLI.jpg',6,'ae81c930-0da4-4894-825d-29a47e3635cc'),(8,'https://i.imgur.com/OiN1jiv.jpg',6,'ff946e98-7a42-4e71-9adb-b04dea2ffedb'),(9,'https://i.imgur.com/dZr4buW.jpg',6,'48b3b044-53e5-4a26-b7cf-31efcdee7030'),(10,'https://i.imgur.com/Ihc4eB9.jpg',7,'9c360970-4d1c-46f0-8495-df21c4493c8b'),(11,'https://i.imgur.com/k7JXkRg.jpg',7,'b9b465d3-6677-4f22-b47e-83e80fa19615'),(12,'https://i.imgur.com/pWRoQo3.jpg',7,'b0aff024-8214-4a9e-8f42-541cced23de2'),(13,'https://i.imgur.com/xmlhYex.jpg',8,'0d107a9f-ed24-4c8d-98e1-9bea59ae5b00'),(14,'https://i.imgur.com/AhW09XV.jpg',8,'5836879e-eb83-48e8-8688-52908665bce7'),(15,'https://i.imgur.com/7Br8Ywi.jpg',8,'a3c517ef-34ed-4aa7-8c5b-4afdaf059f00'),(16,'https://i.imgur.com/NunmFJf.jpg',9,'1bc0de7a-e56e-4f2b-950d-6e5ea64d2e98'),(17,'https://i.imgur.com/PwhFeb0.jpg',9,'cfed570b-ed5f-47ae-818a-e31321e2df96'),(18,'https://i.imgur.com/0R6k25B.jpg',9,'2fe04b4b-fbe3-4cb1-8c73-f5e94b360f3c'),(19,'https://i.imgur.com/DqWURNQ.jpg',10,'142fd11f-369a-4713-a1b6-d065934b5fdd'),(20,'https://i.imgur.com/iCWnLyr.jpg',10,'e2ebd545-8342-4d47-b5a3-ed93c719530b'),(21,'https://i.imgur.com/jnhvk6B.jpg',10,'b20656fc-d27a-4538-9314-8582223de809'),(22,'https://i.imgur.com/ZdAGVoQ.jpg',11,'b3525833-8b3f-4230-8004-cbc858473b47'),(23,'https://i.imgur.com/hjvJbwG.jpg',11,'e16f7d26-d1c1-4958-9ecc-a9c8ddde764e'),(24,'https://i.imgur.com/CI1KYQI.jpg',11,'9bfa2fc0-5fa1-4ab2-9d09-eb70bb5642c3'),(25,'https://i.imgur.com/8wchKBL.jpg',12,'0078f005-271d-448f-8c17-5a206f906465'),(26,'https://i.imgur.com/3tCpZ4P.jpg',12,'04845434-4ed3-40b0-bff7-843e5eca93c4'),(27,'https://i.imgur.com/RurVmxa.jpg',12,'255e63d5-a29b-425f-88e3-562967ec1de6'),(28,'https://i.imgur.com/wcmlM1J.jpg',13,'6217419d-a27f-461f-8229-30c1d2c2ebdc'),(29,'https://i.imgur.com/qp0ZVyh.jpg',13,'11f94704-54b4-49ea-9549-b87774754349'),(30,'https://i.imgur.com/D8auH7y.jpg',13,'27859662-67a3-4a32-8ba3-a56814221fac'),(31,'https://i.imgur.com/V7BklyH.jpg',14,'16cafaeb-f707-48ea-858b-d9b69f27fade'),(32,'https://i.imgur.com/vqxNDGu.jpg',14,'67953103-ec41-4ecc-bb3d-ff3528928ff1'),(33,'https://i.imgur.com/E69ljDc.jpg',14,'d00847cf-ac15-4fad-a0f3-ea6f6672b91b');
/*!40000 ALTER TABLE `property_image` ENABLE KEYS */;
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
