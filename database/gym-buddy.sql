-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 15, 2019 at 09:46 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gym-buddy`
--

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

DROP TABLE IF EXISTS `friends`;
CREATE TABLE `friends` (
  `sender` smallint(6) NOT NULL,
  `receiver` smallint(6) NOT NULL,
  `id` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`sender`, `receiver`, `id`) VALUES
(5, 2, 21),
(2, 5, 22),
(6, 3, 43),
(3, 6, 44),
(7, 2, 65),
(2, 7, 66),
(15, 16, 87),
(16, 15, 88),
(5, 3, 91),
(3, 5, 92),
(8, 1, 101),
(1, 8, 102),
(1, 3, 133),
(3, 1, 134),
(7, 5, 183),
(5, 7, 184),
(1, 22, 195),
(22, 1, 196),
(34, 3, 219),
(3, 34, 220),
(1, 6, 227),
(6, 1, 228),
(36, 35, 233),
(35, 36, 234),
(5, 36, 235),
(36, 5, 236),
(5, 35, 237),
(35, 5, 238),
(1, 17, 239),
(17, 1, 240),
(1, 34, 245),
(34, 1, 246),
(1, 2, 247),
(2, 1, 248),
(12, 9, 251),
(9, 12, 252),
(1, 10, 253),
(10, 1, 254),
(1, 5, 255),
(5, 1, 256),
(1, 42, 267),
(42, 1, 268),
(42, 7, 273),
(7, 42, 274),
(42, 28, 275),
(28, 42, 276);

-- --------------------------------------------------------

--
-- Table structure for table `gyms`
--

DROP TABLE IF EXISTS `gyms`;
CREATE TABLE `gyms` (
  `id` smallint(6) NOT NULL,
  `name` varchar(200) NOT NULL,
  `placeid` varchar(500) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `gyms`
--

INSERT INTO `gyms` (`id`, `name`, `placeid`, `lat`, `lng`) VALUES
(1, 'Achieve Fitness - Anaheim', 'ChIJuyPeCYwp3YARNDg6As-OIqk', 33.8025893, -117.9460374),
(2, 'South Anaheim Fit Body Boot Camp', 'ChIJV4R4Keop3YARZ4YZVz-lHjs', 33.7964012, -117.9403234),
(3, 'Crunch Fitness - Garden Grove', 'ChIJ6dW-uFEo3YARPtrylkd3fn8', 33.8023375, -117.9615535),
(4, 'Planet Fitness', 'ChIJCfCE4joo3YART3f6rvae6Tk', 33.802122, -117.938645),
(5, 'Phenomenal Nutrition', 'ChIJ2xLyVgMp3YARURlN_aYSPUA', 33.8035637, -117.9484197),
(6, 'Hilton Health Club and Spa', 'ChIJlYb13N3X3IARyBF1l-gMwbE', 33.8008282, -117.9183447),
(7, 'Muevelo Dance Fitness', 'ChIJ_Vlb59PX3IAR_la1qL29sXM', 33.7879509, -117.9231023),
(8, 'Chuze Fitness', 'ChIJR9Haa2go3YARvfzPdEiPtcM', 33.7861119, -117.959675),
(9, 'Master Toddy LA Training Center Anaheim', 'ChIJiXi2P8wp3YARdLClhREPP6o', 33.8182738, -117.9405),
(10, '24 Hour Fitness', 'ChIJJTWsf14o3YARjfgmzlLGDjo', 33.789939, -117.966178),
(11, 'Ashley Whitford, RYT-200', 'ChIJrS4pTGXn3IAR-wx3Ma9rdbk', 33.643929, -117.7373831),
(12, 'OC Performance Coaches', 'ChIJwSm6HHro3IAR8hwfKDGsd34', 33.627603, -117.731175),
(13, 'CorePower Yoga', 'ChIJM2eheHro3IARnvBlgo9ijb0', 33.628771, -117.728482),
(14, '24 Hour Fitness', 'ChIJexLPhuPn3IARxiRg4ByaBfY', 33.642992, -117.742743),
(15, 'CKO Kickboxing', 'ChIJ085hhHro3IARoz_84ioJmGM', 33.6287563, -117.7283147),
(16, 'SIX Station Interval Xperience', 'ChIJz5Xx5Azn3IARdrS_A8X3Utg', 33.6460979, -117.7441491),
(17, 'Radiant Hot Yoga - Irvine', 'ChIJe64ileTn3IARzAGg1tAuBig', 33.6464939, -117.7453507),
(18, 'Ra Yoga Irvine Spectrum Center', 'ChIJE-I-7APn3IAR4vHzRGLI9L0', 33.6492998, -117.7418702),
(19, 'ProSport Physical Therapy & Performance', 'ChIJXYoHmnro3IARQKc3pQn1pO8', 33.6281294, -117.7273504),
(20, 'Phenomenal Fitness Inc', 'ChIJOxdciWHo3IARA-2_vRaeSfI', 33.6241418, -117.7260218),
(21, 'Upgrade Pilates', 'ChIJkY69c4Dp3IARXvXORjVHOD4', 33.6276476, -117.7243712),
(22, 'Ruination CrossFit', 'ChIJCY_EtIfp3IARqy-QE088Ldw', 33.6283939, -117.7273712),
(23, '24 Hour Fitness', 'ChIJISvvp_nn3IARYyjkgDSVhHc', 33.652764, -117.746139),
(24, 'KINETIC', 'ChIJoeNKXffn3IARb-jiR-bw4nY', 33.6515478, -117.7504168),
(25, 'Xynergy Mind Body & Soul (Corporate Wellness Company)', 'ChIJ5Yl_ylfd3IAR6Cz3OyuZJ3Y', 33.657126, -117.746395),
(26, 'Fit by Cy', 'ChIJbRqZ3Rzn3IARj1c--K5cSnA', 33.653342, -117.751789),
(27, 'Sport Science Lab', 'ChIJi2qSTFTd3IARWQNnOAhHchE', 33.6595048, -117.7412939),
(28, 'The Village Fitness', 'ChIJOVkDxPfn3IARTTFIqbnF2Jc', 33.6535841, -117.7509831),
(29, 'Gold\'s Gym', 'ChIJN0NR4zko3YARzZNNzuknP5A', 33.8010001, -117.9434295),
(30, 'Laguna Hills Fit Body Boot Camp', 'ChIJfV_Yfn7o3IAR8iWj5OmhtAw', 33.619914, -117.733267),
(31, 'International Martial Art Center', 'ChIJZ8jF5LYu3YAR-VGATeMFHac', 33.8106233, -118.0101156),
(32, 'Nippon Shiatsu Spa', 'ChIJwZat_BUp3YARpyODO-eOO88', 33.8167978, -117.9944695),
(33, 'Kung-Fu San Soo at Cypress College', 'ChIJq_Hxv6su3YAR6ipB56anpYo', 33.8265369, -118.0240416),
(34, 'Zuly Fitness', 'ChIJzRcU_wQp3YARqO4vE5OXxwc', 33.8104819, -118.0028331),
(35, '1Fit', 'ChIJu9hXBh8s3YARNjVqhQn0FJ8', 33.8319341, -118.0256031),
(36, 'Planet Fitness', 'ChIJBdiv1lAp3YAR3qiPBNJWr5o', 33.8330444, -118.0094963),
(37, 'UFC GYM Cypress', 'ChIJo8D6kqgu3YARiFSjpO28hGQ', 33.8302161, -118.0290838),
(38, 'Chuze Fitness', 'ChIJi7G_3Wcp3YARzRvhB5kug0U', 33.833484, -117.9950526),
(39, 'Stella Luna Yoga', 'ChIJbwihy6gu3YARUqjeETF9tYk', 33.8287193, -118.0289051),
(40, 'Galicia Nutritional Center', 'ChIJ09Vok_0r3YARGWOOxduQOfo', 33.8390017, -118.0118728),
(41, 'Chuze Fitness', 'ChIJ4689hrwu3YAR3_LW3yoOj-A', 33.8189113, -118.0376535),
(42, 'Club Pilates', 'ChIJZ1dX0psv3YARCYhmItcsFpg', 33.8150215, -118.029444),
(43, 'Strong Dance Studios', 'ChIJkVBtcrwu3YARg1tT-ATc3cE', 33.8182975, -118.0380661),
(44, 'Fitness 19', 'ChIJbTLL-w4s3YARBd0w93LXSFo', 33.8475971, -118.0269068),
(45, '24 Hour Fitness', 'ChIJTR9u7tgr3YARyWwNAPc30RQ', 33.84437, -117.9877567),
(46, 'My Gym Buena Park', 'ChIJt66v7dgr3YARB1_B7MVB9fw', 33.8447023, -117.9889537),
(47, 'Blink Fitness', 'ChIJu3eAnHop3YARXSqeZSssvcI', 33.8184, -117.962),
(48, 'Fit Defined Personal Training', 'ChIJ4wf76Lop3YARhwpfeSPHpX8', 33.8220346, -117.958079),
(49, 'Body & Brain Yoga Tai Chi - Garden Grove', 'ChIJc0-BzHAo3YARFNTbWURXJL4', 33.7746873, -117.9579259),
(50, 'Orange County Judo Training Center', 'ChIJacbr1goo3YARH0x7MQaVA0g', 33.7738019, -117.9460069),
(51, 'Garden Grove Boxing', 'ChIJeytP3woo3YARprrAaYacQF8', 33.7738104, -117.9471127),
(52, 'Shaolin Warrior Academy', 'ChIJ7Q8rMmkn3YAREilL0A8bVF4', 33.7734658, -117.981898),
(53, 'Hero Quarterback Development Program', 'ChIJx09KMync3IARjT9lFK9sdqg', 33.684494, -117.825296),
(54, '9Round Fitness Irvine', 'ChIJ8x6-zCbc3IAR0pbQ1iyPzZ4', 33.692522, -117.82694),
(55, 'Studio Fixx', 'ChIJWbqoip7e3IARCRKqkegvT7w', 33.69223, -117.834093),
(56, 'Personal Evolutions Pilates', 'ChIJWzbv98bd3IARbyX1CU2oWx4', 33.6845673, -117.8265049),
(57, 'SeaFit', 'ChIJg3ORdIDe3IARd0gnrgT9Mfk', 33.6760492, -117.8325487),
(58, 'Destination Fitness OC', 'ChIJHyfV3vff3IARiMG3VMym6E4', 33.6760447, -117.8326022),
(59, 'Primal Fitness Centers', 'ChIJCxIAW2Tf3IARc8rrfGziHYg', 33.6931403, -117.8329003),
(60, 'Hybrid fitness-OC personal training Irvine', 'ChIJNXE0VZbe3IARslMM7w4g5zU', 33.693126, -117.8329209),
(61, 'Black Label Athletics', 'ChIJNUU8Jl7e3IARY8NNeuj5E2I', 33.6931403, -117.8329003),
(62, 'Olympia Training Center', 'ChIJGR4Dygzc3IARYNuTFoZS6C4', 33.7159467, -117.8080067),
(63, 'Wildfire Gymnastics', 'ChIJKYB6Sg3c3IAR6B05ZvBT_gM', 33.7140189, -117.8080001),
(64, 'PowerLab Workouts', 'ChIJRZsWture3IARqgulYOsAxJU', 33.7133136, -117.8062838),
(65, 'CrossFit Tustin', 'ChIJJ3CP0XLc3IARWkL3nyxCyfI', 33.7150706, -117.8072785),
(66, 'Beyond Namaste LLC', 'ChIJB4DyqAzc3IARiFa8HmUqrQQ', 33.7176744, -117.8083257),
(67, 'United Volleyball Club', 'ChIJpUn4_G3c3IAR2HaolH9XQtg', 33.7142686, -117.8027955),
(68, 'Row House', 'ChIJrU9c6g_c3IAR6-WKJTqZArg', 33.7135542, -117.8164549),
(69, 'My Gym Children\'s Fitness Center', 'ChIJ79frbCXo3IARMNuGy-d0Qq0', 33.706321, -117.80606),
(70, 'EuroGymnastics', 'ChIJjTbFUmPd3IAR0WvZeQ3UU2M', 33.7209768, -117.8065052),
(71, 'Club Pilates', 'ChIJsTC34Q7c3IARP0vV1hthKDQ', 33.7116433, -117.8178213),
(72, 'LA Fitness', 'ChIJS3dWV3Dc3IARK2RHm-l9sAE', 33.717496, -117.798486),
(73, 'Custom Bodies Fitness', 'ChIJAQuKLcDc3IARQeHyU2BmX5M', 33.7142686, -117.8027955),
(74, '24 Hour Fitness', 'ChIJMyo3_8LX3IARpG6luw5wZAA', 33.805609, -117.911444),
(75, '24 Hour Fitness', 'ChIJtVy-_wPW3IARzjb1ZK6jzkk', 33.855424, -117.918941),
(76, 'The Yoga Mat Anaheim', 'ChIJIdJk-iTW3IAR6qxYO4c6AVQ', 33.8339835, -117.9162088),
(77, 'F45 Training Downtown Anaheim', 'ChIJYdHuw4vX3IAR-9LEYg5yPBM', 33.833186, -117.9147047),
(78, 'NRGY ZUMBA STUDIO', 'ChIJcTDz-kLX3IARk9RlL83JMls', 33.8434844, -117.9162551),
(79, 'FITNESSE', 'ChIJoXuCHxLW3IARTja2NlLEw40', 33.852021, -117.9071224),
(80, 'CrossFit Coincide', 'ChIJSwMlS8Mp3YARAo80oeyPdJs', 33.8316584, -117.9367846),
(81, 'Bikram Yoga Fullerton', 'ChIJk2bi5AHW3IAR5dvMOuhFk14', 33.8555897, -117.9255749),
(82, 'Anderson Fitness Institute', 'ChIJXdOqlg7W3IARkEKdTPPqNHo', 33.8566082, -117.9083405),
(83, 'Amer Master Center of Human Development International', 'ChIJazIo2VHW3IARpoCTjtRYPxk', 33.8335939, -117.8895606),
(84, 'Anaheim Fit Body Boot Camp', 'ChIJ1TiGVwnW3IARgMxA0q4MOvA', 33.8590732, -117.9075278),
(85, 'Chuze Fitness', 'ChIJp3diwADW3IARYHLlLunwcvI', 33.8591205, -117.9203423),
(86, 'STARS Sports Training and Rehabilitation Services', 'ChIJb4wV-sbX3IARDzOUspx1Ddw', 33.8096036, -117.9053104),
(87, 'EuroGymnastics', 'ChIJb4wV-sbX3IARAN7qglcKIBA', 33.8096036, -117.9053104),
(88, 'Gold\'s Gym', 'ChIJ99l03-vX3IARWlQNl7NRlQg', 33.8375729, -117.8847203),
(89, 'Open Gym Premier', 'ChIJ5yLf9sbX3IARw79bb44qheo', 33.809702, -117.904108),
(90, 'Big Boss Gym', 'ChIJm-8bTniIr44Rjh9MSWTbAhw', 18.4918956, -69.8622798),
(91, 'Centro Deportivo Y Cultural Ozama (CEDECO)', 'ChIJR7lvyW-Ir44RySJbs0bFVLw', 18.488465, -69.8730225),
(92, 'NL Health Club', 'ChIJNceJu3mIr44RSpdCDzENeY8', 18.4918557, -69.8638301),
(93, 'Zapateria Pache', 'ChIJmU0lgkKIr44RaCYZmiBGg60', 18.4897244, -69.8837015),
(94, 'Flow Fitness', 'ChIJBz6RG3uIr44RUX1_strqBqg', 18.4938586, -69.8696681),
(95, 'Gym Gori', 'ChIJLUL6262Jr44RtGYWtZWRVGE', 18.4892858, -69.8830958),
(96, 'Maxx Protein', 'ChIJnURPtJyJr44RBaxxhwe8b3E', 18.4828471, -69.8658586),
(97, 'Gimnasio big boss', 'ChIJ3xRg8neIr44RJ5AJ-k0NqAA', 18.4919252, -69.862197),
(98, 'Alliyah\'s Gym', 'ChIJk0vui3OIr44RRvk0z_wTMso', 18.4828331, -69.8660155),
(99, 'StretchLab', 'ChIJ0a7zDJXn3IARKjEzSSCv-gk', 33.649056, -117.7420748),
(100, 'Boxing On the Boulevard', 'ChIJ0wydvTO_woARrkTtdDi8mwo', 34.0906166, -118.3301851),
(101, 'Vitru', 'ChIJPQlD7zG_woARPED0eSY_MhI', 34.0924364, -118.3337195),
(102, 'BOX Personal Training', 'ChIJayJxQjS_woAR6fhBhAGEFOo', 34.0915087, -118.327345),
(103, 'Gold\'s Gym', 'ChIJveYycDO_woARPiC1LnmEiJ8', 34.0895012, -118.3295139),
(104, 'Get Your Real Soldiers gear @ The Pro fight Shop', 'ChIJ03mt5DS_woAR05UbQsgWkfg', 34.0902592, -118.3261462),
(105, 'Wild Card Boxing', 'ChIJayJxQjS_woARpOduEu6eJRM', 34.0915087, -118.327339),
(106, '24 Hour Fitness', 'ChIJe30U6qzAwoARFTDe5iSaxzQ', 34.0971612, -118.3285021),
(107, 'Love for Pilates - Hollywood', 'ChIJh-jeuza_woARK-XRlfEBPvk', 34.094004, -118.327673),
(108, 'Pilates Art Center', 'ChIJMR9XBfO3woARpHRJLDdv89I', 34.083152, -118.3284448),
(109, 'UFC GYM Garden Grove', 'ChIJvXRQXALY3IARZeDKcU6DTFY', 33.7776622, -117.9170965),
(110, 'Subfighter MMA', 'ChIJexrcbGPo3IARZwlMRWcWRho', 33.6237798, -117.723688),
(111, 'ProConnic Natural Health', 'ChIJ5UhAoV3p3IARybhL0O670iY', 33.6229496, -117.7235645),
(112, 'OC CryoCare', 'ChIJY2H312Lo3IAR65o5zgauyfo', 33.622036, -117.724891),
(113, 'Russ Miura Jiu Jitsu - Next Generation OC', 'ChIJ57Sd52Lo3IARqIKIF9I0uBw', 33.62178, -117.7240799),
(114, 'Hard Core Fitness Studio', 'ChIJnSbWZGbo3IARRTvIjuW5N2w', 33.6296171, -117.7192395),
(115, 'Maddy Lifts Fitness & Nutrition', 'ChIJlaYuXeYn3YARIuEaiVq_EUQ', 33.697877, -117.9986746),
(116, 'The Camp Transformation Center - Huntington Beach', 'ChIJKSF21eom3YARdLGR77LeVto', 33.6973983, -118.0012338),
(117, 'Red Wolf CrossFit', 'ChIJ13rSRZQm3YAR9TD128-UjFY', 33.7005763, -117.9992406),
(118, 'Transformation Camp HB', 'ChIJGx2BlFUn3YAR6N8FjJ4C67M', 33.7091379, -117.9999727),
(119, 'HB Pilates & Fitness', 'ChIJqz2K4k0h3YARDch3YgsRphI', 33.6999917, -118.0077825),
(120, 'OC Fit Boot Camp Personal Trainer Huntington Beach', 'ChIJR-4I9pUm3YARSPxep7cSq6Q', 33.6968336, -118.0009756),
(121, 'Human Movement Lab', 'ChIJYWCaYo0m3YARdePioSK226M', 33.7077852, -117.9972571),
(122, 'United Studios of Self Defense Huntington Beach', 'ChIJARyD54km3YARlvESBqT18fk', 33.7160787, -118.0024061),
(123, 'Hardcore Fitness Huntington Beach', 'ChIJo6CK1ykn3YARNMclQd99HXk', 33.7053304, -117.9950606),
(124, 'Flow Water Yoga Life', 'ChIJFWrJqJgn3YARZc38MRZPL14', 33.7027803, -117.9895279),
(125, 'OPTIMUM CrossFit', 'ChIJFaFVjIcm3YAR39_zSWCZ8zQ', 33.714803, -118.008552),
(126, 'Align Fitness By Allie', 'ChIJLd69wW4g3YAR4C_Ah0DCUnQ', 33.701873, -117.98979),
(127, 'Tribe Strength', 'ChIJn3COxKcn3YAR2AHL_l9HGhE', 33.715695, -118.0095135),
(128, 'Fighter Girls', 'ChIJvXyu0mjo3IARZ4cGCzGpD_w', 33.6327337, -117.7193475);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `senderid` mediumint(8) UNSIGNED NOT NULL,
  `receiverid` mediumint(8) UNSIGNED NOT NULL,
  `messageval` varchar(140) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `senderid`, `receiverid`, `messageval`) VALUES
(1, 1, 2, 'Hello! I am looking for someone to workout with :)'),
(2, 1, 3, 'Hello, Im looking for someone to workout with! '),
(3, 3, 1, 'Hello, Im looking for someone to workout with! '),
(4, 3, 2, 'Hello, Im looking for someone to workout with! '),
(5, 2, 3, 'Hello, Im looking for someone to workout with! '),
(6, 3, 1, 'Hello?'),
(7, 2, 1, 'Hello Do you still use this app?'),
(9, 5, 1, 'Dont reply to this, its a test'),
(10, 1, 5, 'Hey!'),
(11, 1, 5, 'Hello Again'),
(12, 1, 5, 'Hello Again'),
(41, 1, 5, 'Test'),
(42, 1, 5, 'Hello'),
(43, 1, 5, 'Whats going on bro haha'),
(44, 1, 5, 'Testing'),
(45, 1, 5, 'Testing'),
(46, 1, 5, 'test'),
(47, 1, 5, 'tes'),
(48, 1, 5, 'tes'),
(49, 1, 5, 'tset'),
(50, 2, 1, 'I want to check to see if the order of messages update'),
(51, 1, 3, 'Testing'),
(55, 1, 16, 'Hello!'),
(56, 16, 1, 'Hey there'),
(57, 8, 1, 'Yo whats up bro'),
(58, 1, 8, 'Hey Dan can I get a CSS question'),
(60, 1, 8, 'Thanks'),
(61, 1, 8, 'Whats going on Dan'),
(62, 8, 1, 'Hey Aaron, youre not good'),
(63, 1, 8, 'Thanks Dan'),
(64, 1, 8, 'Sup Dan'),
(65, 3, 1, 'Yo aaron, this app is tight son'),
(66, 1, 3, 'Thanks Jan, you the OG'),
(67, 8, 1, 'Hello Aaron'),
(68, 8, 1, 'How are you doing'),
(69, 1, 5, 'Another Test bro'),
(70, 7, 5, 'Hey Tony'),
(71, 1, 7, 'Hello Chump Supreme'),
(73, 6, 1, 'Hello Aaron! I want to get stronger at benching and I saw that you workout on most weekdays, I was w'),
(74, 6, 1, 'Hello again Aaron, just checking again to see how many letters I can fit in this dialogue box before it actually overflo'),
(81, 1, 22, 'Hello'),
(82, 1, 6, 'Hey Tarun, wanna grab costco after we workout today?'),
(83, 6, 1, 'Yea sure'),
(84, 6, 1, 'You\'re getting this live right'),
(85, 1, 10, 'Hey Dan hows it going'),
(86, 1, 17, 'yoooo'),
(87, 17, 1, 'Hello Aaron'),
(88, 6, 1, 'I hope you are'),
(89, 1, 8, 'Wait, this is Adison now'),
(90, 1, 8, 'Hey Adison can I get a css question'),
(91, 1, 3, 'I mean richard'),
(92, 1, 2, 'Yes it works bro'),
(93, 8, 1, 'Sure thing bud'),
(94, 8, 1, 'Isnt this messaging sick'),
(95, 8, 1, 'this messaging is live'),
(96, 6, 1, 'Bro you owe me Costco hotdogs, dont forget'),
(97, 6, 1, 'Im cool with a pizza too'),
(98, 1, 6, 'You got it bro, but also I carried you in BP so I think we should be even'),
(99, 1, 34, 'yo whats up willy, I didnt know you went to this gym'),
(100, 34, 1, 'yea bro just started, I even got the membership with free towels'),
(101, 12, 9, 'Hey Jan, Im in yo DMs'),
(102, 9, 12, 'Yoooooo its lit'),
(103, 12, 9, 'This it lit!'),
(104, 1, 10, 'Hey Dan can I get some css questions'),
(105, 10, 1, 'No.'),
(106, 6, 1, 'Nah bro I carried you'),
(107, 1, 6, 'No you didnt'),
(108, 6, 1, 'But I did'),
(109, 1, 40, 'Hello!'),
(110, 1, 8, 'Its dope!'),
(111, 1, 8, 'haha'),
(112, 1, 42, 'We made this app!'),
(113, 7, 42, 'We made this app!'),
(114, 28, 42, 'We made this app!'),
(115, 42, 1, 'Nice!'),
(116, 42, 1, 'Lets go!'),
(117, 42, 7, 'Nice!');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
CREATE TABLE `schedule` (
  `id` smallint(50) UNSIGNED NOT NULL,
  `username` varchar(100) CHARACTER SET utf8 NOT NULL,
  `day` varchar(50) CHARACTER SET utf8 NOT NULL,
  `starttime` int(100) UNSIGNED NOT NULL,
  `endtime` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `username`, `day`, `starttime`, `endtime`) VALUES
(6, 'Mphaaan', 'Monday', 2000, 800),
(7, 'Mphaaan', 'Sunday', 800, 1500),
(8, 'Mphaaan', 'Saturday', 800, 1500),
(16, 'ScheduleFinal', 'Sunday', 800, 1800),
(17, 'ScheduleFinal', 'Tuesday', 800, 1800),
(18, 'ScheduleFinal', 'Monday', 800, 1800),
(19, 'ScheduleFinal', 'Wednesday', 800, 1800),
(20, 'ScheduleFinal', 'Thursday', 800, 1000),
(21, 'ScheduleFinal', 'Saturday', 1000, 1400),
(22, 'ScheduleFinal', 'Friday', 600, 800),
(50, 'DanTheMan2', 'Tuesday', 1800, 2200),
(51, 'DanTheMan2', 'Thursday', 1800, 2200),
(52, 'DanTheMan2', 'Friday', 1800, 2200),
(53, 'DanTheMan2', 'Monday', 1800, 2200),
(54, 'DanTheMan2', 'Wednesday', 1800, 2200),
(96, 'TonyDaTester', 'Sunday', 800, 1000),
(104, 'ligmaass', 'Monday', 100, 200),
(105, 'ligmaass', 'Sunday', 100, 200),
(106, 'ligmaass', 'Tuesday', 100, 200),
(107, 'ligmaass', 'Thursday', 100, 200),
(108, 'ligmaass', 'Wednesday', 100, 200),
(109, 'ligmaass', 'Saturday', 100, 200),
(110, 'ligmaass', 'Friday', 100, 200),
(111, 'rjaytea', 'Wednesday', 1800, 2200),
(112, 'rjaytea', 'Sunday', 1000, 2200),
(113, 'rjaytea', 'Saturday', 1000, 2200),
(119, 'HitmonWillee', 'Thursday', 800, 1000),
(120, 'HitmonWillee', 'Monday', 700, 800),
(121, 'HitmonWillee', 'Tuesday', 800, 1000),
(122, 'HitmonWillee', 'Wednesday', 800, 1000),
(123, 'HitmonWillee', 'Friday', 600, 1000),
(130, 'Sham(Ed)', 'Wednesday', 1200, 1600),
(131, 'Sham(Ed)', 'Monday', 1200, 1600),
(132, 'Sham(Ed)', 'Tuesday', 1200, 1600),
(133, 'Sham(Ed)', 'Thursday', 1200, 1600),
(134, 'Sham(Ed)', 'Friday', 1200, 1600),
(150, 'Skyen', 'Monday', 1600, 1800),
(151, 'Skyen', 'Wednesday', 1600, 1800),
(152, 'Skyen', 'Tuesday', 1600, 1800),
(153, 'Skyen', 'Thursday', 1600, 1800),
(154, 'Skyen', 'Friday', 1600, 1800),
(175, 'LocSenpai', 'Monday', 1700, 2200),
(176, 'LocSenpai', 'Wednesday', 1700, 2200),
(177, 'LocSenpai', 'Thursday', 1700, 2200),
(178, 'LocSenpai', 'Tuesday', 1700, 2200),
(179, 'LocSenpai', 'Friday', 1700, 2200),
(180, 'ChrisP.', 'Monday', 800, 900),
(181, 'ChrisP.', 'Wednesday', 800, 900),
(182, 'ChrisP.', 'Thursday', 800, 900),
(183, 'ChrisP.', 'Tuesday', 800, 900),
(184, 'ChrisP.', 'Friday', 800, 900),
(185, 'LigmaBlank', 'Thursday', 100, 300),
(186, 'LigmaBlank', 'Wednesday', 100, 300),
(187, 'LigmaBlank', 'Monday', 100, 300),
(188, 'LigmaBlank', 'Tuesday', 100, 300),
(189, 'LigmaBlank', 'Friday', 100, 300),
(190, 'Thaoster', 'Wednesday', 700, 800),
(191, 'Thaoster', 'Monday', 700, 800),
(192, 'Thaoster', 'Tuesday', 700, 800),
(193, 'Thaoster', 'Friday', 700, 800),
(194, 'Thaoster', 'Thursday', 700, 800),
(195, 'DaneTheMane', 'Wednesday', 800, 1400),
(196, 'DaneTheMane', 'Friday', 800, 1400),
(197, 'DaneTheMane', 'Monday', 800, 1400),
(349, 'DanDaMan', 'Sunday', 0, 2300),
(350, 'DanDaMan', 'Tuesday', 0, 2300),
(351, 'DanDaMan', 'Wednesday', 0, 2300),
(352, 'DanDaMan', 'Monday', 0, 2300),
(353, 'DanDaMan', 'Thursday', 0, 2300),
(354, 'DanDaMan', 'Friday', 0, 2300),
(355, 'DanDaMan', 'Saturday', 0, 2300),
(361, 'TurnerTester', 'Thursday', 700, 1000),
(362, 'TurnerTester', 'Wednesday', 700, 1000),
(363, 'TurnerTester', 'Tuesday', 700, 1000),
(364, 'TurnerTester', 'Monday', 700, 1000),
(365, 'TurnerTester', 'Friday', 700, 1000),
(368, 'AyyAyyRonn', 'Wednesday', 700, 1000),
(369, 'AyyAyyRonn', 'Monday', 700, 1000),
(370, 'AyyAyyRonn', 'Tuesday', 700, 1000),
(371, 'AyyAyyRonn', 'Thursday', 700, 1000),
(372, 'AyyAyyRonn', 'Friday', 700, 1000),
(394, 'Guest', 'Tuesday', 800, 1000),
(395, 'Guest', 'Thursday', 800, 1000),
(396, 'Guest', 'Monday', 800, 1000),
(397, 'Guest', 'Wednesday', 800, 1000),
(398, 'Guest', 'Friday', 800, 1000);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `username` varchar(20) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `age` tinyint(4) NOT NULL,
  `weightlifting` varchar(20) NOT NULL,
  `cardio` varchar(20) NOT NULL,
  `yoga` varchar(20) NOT NULL,
  `bodybuilding` varchar(20) NOT NULL,
  `swimming` varchar(20) NOT NULL,
  `photo` varchar(1200) NOT NULL,
  `gymid` varchar(50) NOT NULL,
  `gymname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `firstname`, `lastname`, `age`, `weightlifting`, `cardio`, `yoga`, `bodybuilding`, `swimming`, `photo`, `gymid`, `gymname`) VALUES
(1, 'AyyAyyRonn', 'Aaron', 'Domingo', 25, 'Intermediate', 'Beginner', 'Beginner', 'Intermediate', 'Beginner', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ubIDVqfnx8SNw87WlfuYJDC9yi_RoS_UrRz-eCkUzL-5ExK1&s', 'ChIJexLPhuPn3IARxiRg4ByaBfY', '24 Hour Fitness'),
(2, 'Sham(Ed)', 'Edward', 'Lee', 25, 'Expert', 'Beginner', 'Beginner', 'Expert', 'Beginner', 'https://media.licdn.com/dms/image/C5603AQHEP0hQhaFpWQ/profile-displayphoto-shrink_800_800/0?e=1577923200&v=beta&t=fAFC3WyuEu-xeHr-vzNxHyPZ7b9cN4nI6Zdvg5Wyj0s', 'ChIJE-I-7APn3IAR4vHzRGLI9L0', 'Ra Yoga Irvine Spectrum Center'),
(3, 'rjaytea', 'Richard', 'Tea', 25, 'Intermediate', 'Expert', 'Expert', 'Expert', 'Intermediate', 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-1/55924254_2114549045260661_9125710463433179136_o.jpg?_nc_cat=111&_nc_oc=AQnAyn-8gcUkVdJFeKi3WSfhqm39ypIPKMl_eKrhOFLZK7dwOBV0EKFvjif0A7PZ6ue3255ARoy0WDOp4OR_JltG&_nc_ht=scontent-lax3-2.xx&oh=db6f50dbc9f83d6b6d7e2398bea647df&oe=5E1B4FEE', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(5, 'Skyen', 'Kenneth', 'Keiu', 26, 'Expert', 'Expert', 'Expert', 'Expert', 'Expert', 'https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/24273743_2276438785715701_3871577549920364144_o.jpg?_nc_cat=110&_nc_oc=AQkA42kCF4tUz7ZljeqnVUoFOHVwzQzBwmCSMtSxjaWDZQB2f1f52zHLdLkWTT96wDK24JoAbiN-PSMIVlm5g0Ia&_nc_ht=scontent-lax3-2.xx&oh=0cbff6725e05cedaba58dc09f0af3455&oe=5E1A4883', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(6, 'taruntula', 'Tarun', 'Padath', 25, 'Expert', 'Expert', 'Expert', 'Expert', 'Expert', 'https://media.licdn.com/dms/image/C4D0BAQFgmh2pajt3jQ/company-logo_200_200/0?e=2159024400&v=beta&t=PvgNnkl06fFOyEuieerGDaPk9Gk7xZLaXit4ePzszhs', 'ChIJCY_EtIfp3IARqy-QE088Ldw', 'Ruination CrossFit'),
(7, 'CorgiChristine', 'Christine', 'Le', 28, 'Intermediate', 'Expert', 'Expert', 'Expert', 'Expert', 'https://upload.wikimedia.org/wikipedia/commons/2/2b/WelshCorgi.jpeg', 'ChIJexLPhuPn3IARxiRg4ByaBfY', '24 Hour Fitness'),
(8, 'AikosMaster', 'Adison', 'Ly', 28, 'Expert', 'Expert', 'Intermediate', 'Expert', 'Expert', 'https://media.licdn.com/dms/image/C5603AQFI1P-pRgXUTA/profile-displayphoto-shrink_800_800/0?e=1577923200&v=beta&t=zWLENi4Y9S-QFix1tRaEstIREv0Uhc1jSdKjYxtjJKs', 'ChIJOxdciWHo3IARA-2_vRaeSfI', 'Phenomenal Fitness Inc'),
(9, 'JanNaaasty', 'Jan', 'To-Ong', 30, 'Beginner', 'Expert', 'Expert', 'Expert', 'Beginner', 'https://media.licdn.com/dms/image/C5603AQGr3MQsHR9usQ/profile-displayphoto-shrink_800_800/0?e=1577923200&v=beta&t=PFljX6HVx78ycrNNFxCPtWjCmenS4vSZ6Z1cxXwa4a8', 'ChIJe64ileTn3IARzAGg1tAuBig', 'Radiant Hot Yoga - Irvine'),
(10, 'DanDaMan', 'Daniel', 'Pasc', 18, 'Expert', 'Expert', 'Expert', 'Expert', 'Expert', 'https://www.insidehook.com/wp-content/uploads/2019/03/Arnold_Header_1496168849.jpg?fit=1200%2C750', 'ChIJexLPhuPn3IARxiRg4ByaBfY', '24 Hour Fitness'),
(11, 'LigmaBlank', 'Uzair', 'Ashraf', 25, 'Intermediate', 'Intermediate', 'Expert', 'Beginner', 'Beginner', 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Ffinal-project-dog-images.s3.us-east-2.amazonaws.com%2Fuzair.jpg', 'ChIJz5Xx5Azn3IARdrS_A8X3Utg', 'SIX Station Interval Xperience'),
(12, 'ChrisP.', 'Christie', 'Hui', 22, 'Expert', 'Beginner', 'Intermediate', 'Expert', 'Beginner', 'https://media.licdn.com/dms/image/C5103AQE2LdS0CbwJZg/profile-displayphoto-shrink_800_800/0?e=1577923200&v=beta&t=ZjB1-blWF_65iBQAZLc1wtoen-OkCPNQqTVDojiSt04', 'ChIJrS4pTGXn3IAR-wx3Ma9rdbk', 'Ashley Whitford, RYT-200'),
(13, 'Sean', 'Sean', 'H.', 21, 'Beginner', 'Expert', 'Expert', 'Intermediate', 'Beginner', 'https://www.geek.com/wp-content/uploads/2018/04/Call-of-Duty-Modern-Warfare-2-625x352.jpg', 'ChIJz5Xx5Azn3IARdrS_A8X3Utg', 'SIX Station Interval Xperience'),
(14, 'GIJoe', 'Joe', 'Moberly', 26, 'Beginner', 'Intermediate', 'Intermediate', 'Expert', 'Expert', 'https://www.ssbwiki.com/images/thumb/0/03/Samus_SSBU.png/250px-Samus_SSBU.png', 'ChIJe64ileTn3IARzAGg1tAuBig', 'Radiant Hot Yoga - Irvine'),
(15, 'MamaP', 'Brena', 'Patel', 28, 'Expert', 'Intermediate', 'Intermediate', 'Beginner', 'Intermediate', 'http://m.quickmeme.com/img/3e/3ee905234a49fe22ba0fd57f9f603e068dc727bd17b0a44d4b1dcae7d166a1cc.jpg', 'ChIJM2eheHro3IARnvBlgo9ijb0', 'CorePower Yoga'),
(16, 'LanaDelRay', 'Lena', 'Porina', 21, 'Expert', 'Intermediate', 'Intermediate', 'Expert', 'Beginner', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeh76iK4Co5TqDtiO7gogA6RSJriKhrcvc9bh1na3hUEqAZeLaQ&s', 'ChIJM2eheHro3IARnvBlgo9ijb0', 'CorePower Yoga'),
(17, 'NiceKeyboard', 'Anjaleena', 'Barclay', 21, 'Expert', 'Expert', 'Beginner', 'Beginner', 'Intermediate', 'https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg', 'ChIJexLPhuPn3IARxiRg4ByaBfY', '24 Hour Fitness'),
(20, 'LoverOfDogs', 'Heondo', 'Kim', 24, 'Beginner', 'Beginner', 'Intermediate', 'Expert', 'Intermediate', 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2016/07/0001-h_2016.jpg', 'ChIJXYoHmnro3IARQKc3pQn1pO8', 'ProSport Physical Therapy & Performance'),
(21, 'DaneTheGreat', 'Dane', 'Maison', 25, 'Beginner', 'Expert', 'Intermediate', 'Intermediate', 'Expert', 'https://si.wsj.net/public/resources/images/BN-XF140_0129EM_574V_20180129031614.jpg', 'ChIJXYoHmnro3IARQKc3pQn1pO8', 'ProSport Physical Therapy & Performance'),
(24, 'Jimothy', 'James', 'Cho', 34, 'Expert', 'Beginner', 'Intermediate', 'Expert', 'Beginner', 'https://cdn10.bigcommerce.com/s-npe4l/products/1157/images/1335/B-MZ-SMSHD---HIGH__85441.1477602947.1280.1280.jpg?c=2', 'ChIJe64ileTn3IARzAGg1tAuBig', 'Radiant Hot Yoga - Irvine'),
(25, 'OldManIAm', 'Kevin', 'Ihm', 30, 'Beginner', 'Beginner', 'Beginner', 'Beginner', 'Expert', 'https://cdn-s3.si.com/images/Michael-Phelps-SI-cover-shoot-SI523_TK1_00272.jpg', 'ChIJCY_EtIfp3IARqy-QE088Ldw', 'Ruination CrossFit'),
(26, 'MrMitch', 'Mitch', 'O\'Hair', 21, 'Expert', 'Expert', 'Expert', 'Expert', 'Expert', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKE1ochLqy5RfZNgvk5AiS0Vujh0-tRCvJdNSThBdBsrk5UrJYQ&s', 'ChIJkY69c4Dp3IARXvXORjVHOD4', 'Upgrade Pilates'),
(27, 'FlexBoxGuru', 'Cody', 'Miller', 30, 'Expert', 'Expert', 'Expert', 'Expert', 'Expert', '', 'ChIJoeNKXffn3IARb-jiR-bw4nY', 'KINETIC'),
(28, 'LeonOnirac', 'Noel', 'Carino', 25, 'Expert', 'Beginner', 'Intermediate', 'Expert', 'Beginner', 'https://upload.wikimedia.org/wikipedia/en/1/13/Stick_figure.png', 'ChIJexLPhuPn3IARxiRg4ByaBfY', '24 Hour Fitness'),
(29, 'ChanningTatum', 'Channing', 'Tatum', 21, 'Expert', 'Beginner', 'Beginner', 'Expert', 'Expert', 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/p419915/dearjohn-pm-channingtatum-1.jpg', 'ChIJd_f8NpPe3IARRl8WktLzSSs', 'Equinox Sports Club Orange County'),
(32, 'MrAmerica', 'Chris', 'Evans', 21, 'Expert', 'Expert', 'Beginner', 'Expert', 'Expert', 'https://d.newsweek.com/en/full/857534/captain-america-avengers.jpg?w=1600&h=1600&q=88&f=bacbc8948b0288ce8266643d5a0b1814', 'ChIJd_f8NpPe3IARRl8WktLzSSs', 'Equinox Sports Club Orange County'),
(33, 'MyHoney', 'Winnie', 'Pooh', 93, 'Expert', 'Beginner', 'Beginner', 'Intermediate', 'Expert', 'https://i.kym-cdn.com/entries/icons/original/000/029/060/cover3.jpg', 'ChIJd_f8NpPe3IARRl8WktLzSSs', 'Equinox Sports Club Orange County'),
(34, 'HitmonWillee', 'Willy', 'Tran', 25, 'Intermediate', 'Beginner', 'Beginner', 'Intermediate', 'Expert', 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/28870278_2009341555762132_3459112655279620096_o.jpg?_nc_cat=103&_nc_oc=AQm-itAyf7PCjX1uFD3e52XMiQjBvaPWgq6SshmZ5Dds43NePvdNUKoaRMfZV-KthtwdB1dPumY6_ghnLqSITgYX&_nc_ht=scontent-lax3-2.xx&oh=e87e185edcd0baf8cd07f85e8b81d06d&oe=5E5E087D', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(35, 'LocSenpai', 'Loc', 'Lam', 25, 'Beginner', 'Expert', 'Expert', 'Beginner', 'Expert', 'https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/10733581_828072820584812_792692030546677963_o.jpg?_nc_cat=102&cachebreaker=sd&_nc_oc=AQlrgz7tKH6_VIDw_qKo5qON1JHFdYdM1Eru9OS7YsywUWgDSKiyoQCoKqTT5_mdlYM&_nc_ht=scontent-lax3-2.xx&oh=ee68449920248f92769da9326d350a7b&oe=5E53CFBB', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(36, 'Tommasu', 'Tommy', 'Nguyen', 25, 'Expert', 'Expert', 'Expert', 'Expert', 'Expert', 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/68509402_10214275785517809_7496326139074314240_o.jpg?_nc_cat=109&cachebreaker=sd&_nc_oc=AQlgQihzJuMjsGZhlVsmvUInmfhw6bJbIp_EXh42CHITVAVy7HiTnD-Mp0zhUuJuC9A&_nc_ht=scontent-lax3-2.xx&oh=9057a539c928f2c298cd08ce5249cb1a&oe=5E1B1E5B', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(39, 'Thaoster', 'Thao', 'Huynh', 24, 'Expert', 'Expert', 'Beginner', 'Beginner', 'Expert', 'https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/18192492_1696142943733423_9032157631170816704_o.jpg?_nc_cat=102&cachebreaker=sd&_nc_oc=AQmKcNEfIo2ZAoZCkTrH9YTj_xhPXijxjiT6eGXJj3p-9YBL8yxDeZSricoeJixYvZY&_nc_ht=scontent-lax3-2.xx&oh=99f09077d11333449a371c5e9c7ff0e1&oe=5E20F6AF', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(40, 'DaneTheMane', 'Dane', 'Maison', 25, 'Intermediate', 'Intermediate', 'Intermediate', 'Expert', 'Expert', '', 'ChIJexLPhuPn3IARxiRg4ByaBfY', '24 Hour Fitness'),
(41, 'TurnerTester', 'Turner', 'Thompson', 24, 'Intermediate', 'Expert', 'Beginner', 'Expert', 'Intermediate', '', 'ChIJexLPhuPn3IARxiRg4ByaBfY', '24 Hour Fitness'),
(42, 'Guest', 'Guest', 'User', 18, 'Beginner', 'Intermediate', 'Intermediate', 'Intermediate', 'Beginner', '', 'ChIJexLPhuPn3IARxiRg4ByaBfY', '24 Hour Fitness');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gyms`
--
ALTER TABLE `gyms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `friends`
--
ALTER TABLE `friends`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=277;
--
-- AUTO_INCREMENT for table `gyms`
--
ALTER TABLE `gyms`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;
--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` smallint(50) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=399;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
