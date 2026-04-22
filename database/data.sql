-- MySQL dump 10.13  Distrib 8.0.45, for Linux (x86_64)
--
-- Host: localhost    Database: zillowlab
-- ------------------------------------------------------
-- Server version	8.0.45-0ubuntu0.24.04.1

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
-- Dumping data for table `homes`
--

LOCK TABLES `homes` WRITE;
/*!40000 ALTER TABLE `homes` DISABLE KEYS */;
INSERT INTO `homes` VALUES (6,'1811 E Branch Rd','State College','PA','16801',329900.00,3,2.0,'images/swipe-2.png'),(7,'221 Ellen Ave','State College','PA','16801',399000.00,4,2.0,'images/swipe-3.png'),(8,'2278 Spruce Dr','State College','PA','16801',409000.00,3,3.0,'images/swipe-4.png'),(9,'327 Fry Dr','State College','PA','16801',479000.00,3,2.0,'images/swipe-5.png'),(10,'234 W Fairmount Ave','State College','PA','16801',2585000.00,8,9.0,'images/swipe-6.png'),(11,'126 W South Hills Ave','State College','PA','16801',199900.00,2,2.0,'images/swipe-7.png'),(12,'2107 Circleville Rd','State College','PA','16803',394000.00,4,3.0,'images/swipe-8.png'),(13,'576 E Shadow Ln','State College','PA','16803',873900.00,4,4.0,'images/swipe-9.png'),(14,'403 Keller St','State College','PA','16801',235000.00,3,2.0,'images/swipe-10.png'),(15,'316 Homan Ave','State College','PA','16801',650000.00,3,3.0,'images/swipe-11.png'),(16,'422 Martin Ter','State College','PA','16803',458000.00,3,2.0,'images/swipe-12.png'),(17,'620 Fawn Valley Rd','State College','PA','16803',465000.00,4,3.0,'images/test-image-listing.png');
/*!40000 ALTER TABLE `homes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `quiz_results`
--

LOCK TABLES `quiz_results` WRITE;
/*!40000 ALTER TABLE `quiz_results` DISABLE KEYS */;
INSERT INTO `quiz_results` VALUES (1,500000,3,2.0,'State College','16801','2026-04-20 20:41:21',NULL,0,0,0,0,0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `quiz_results` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-22  0:37:15
