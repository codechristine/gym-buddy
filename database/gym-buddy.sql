-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 29, 2019 at 11:53 PM
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
(1, 3, 79),
(3, 1, 80),
(1, 2, 81),
(2, 1, 82),
(16, 1, 85),
(1, 16, 86),
(15, 16, 87),
(16, 15, 88),
(1, 15, 89),
(15, 1, 90),
(5, 3, 91),
(3, 5, 92),
(22, 1, 97),
(1, 22, 98);

-- --------------------------------------------------------

--
-- Table structure for table `gyms`
--

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
(108, 'Pilates Art Center', 'ChIJMR9XBfO3woARpHRJLDdv89I', 34.083152, -118.3284448);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

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
(8, 4, 1, 'Haha I hope this works'),
(9, 5, 1, 'Dont reply to this, its a test');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

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
(1, 'AyyAyyRonn', 'Thursday', 700, 900),
(2, 'AyyAyyRonn', 'Wednesday', 700, 900),
(3, 'AyyAyyRonn', 'Tuesday', 700, 900),
(4, 'AyyAyyRonn', 'Monday', 700, 900),
(5, 'AyyAyyRonn', 'Friday', 700, 900),
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
(41, 'CorgiChristine', 'Wednesday', 800, 900),
(42, 'CorgiChristine', 'Monday', 1000, 1200),
(43, 'CorgiChristine', 'Tuesday', 700, 800),
(44, 'CorgiChristine', 'Sunday', 0, 600),
(45, 'CorgiChristine', 'Thursday', 1000, 1200),
(46, 'CorgiChristine', 'Saturday', 1000, 1200),
(47, 'CorgiChristine', 'Friday', 1000, 1200),
(48, 'Tester2', 'Sunday', 1000, 1200),
(50, 'DanTheMan2', 'Tuesday', 1800, 2200),
(51, 'DanTheMan2', 'Thursday', 1800, 2200),
(52, 'DanTheMan2', 'Friday', 1800, 2200),
(53, 'DanTheMan2', 'Monday', 1800, 2200),
(54, 'DanTheMan2', 'Wednesday', 1800, 2200),
(62, 'ligmaass', 'Monday', 100, 200),
(63, 'ligmaass', 'Sunday', 100, 200),
(64, 'ligmaass', 'Thursday', 100, 200),
(65, 'ligmaass', 'Tuesday', 100, 200),
(66, 'ligmaass', 'Wednesday', 100, 200),
(67, 'ligmaass', 'Friday', 100, 200),
(68, 'ligmaass', 'Saturday', 100, 200),
(69, 'SunnyDayss', 'Thursday', 700, 1000),
(70, 'SunnyDayss', 'Wednesday', 700, 1000),
(71, 'SunnyDayss', 'Tuesday', 700, 1000),
(72, 'SunnyDayss', 'Monday', 700, 1000),
(73, 'SunnyDayss', 'Friday', 700, 1000),
(74, 'Tester', 'Sunday', 800, 1000);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

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
  `photo` varchar(100) NOT NULL,
  `gymid` varchar(50) NOT NULL,
  `gymname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `firstname`, `lastname`, `age`, `weightlifting`, `cardio`, `yoga`, `bodybuilding`, `swimming`, `photo`, `gymid`, `gymname`) VALUES
(1, 'SunnyDayss', 'AJ', 'Domingo', 25, 'Intermediate', 'Intermediate', 'Intermediate', 'Intermediate', 'Intermediate', '', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(2, 'CorgiChristine', 'Christine', 'Le', 28, 'Beginner', 'Beginner', 'Beginner', 'Beginner', 'Beginner', '', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(3, 'JanNaaasty', 'Jan', 'To-Ong', 30, 'Beginner', 'Beginner', 'Beginner', 'Beginner', 'Beginner', '', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(4, 'ChrisPeterson', 'Chris', 'Peterson', 30, 'Intermediate', 'Intermediate', 'Intermediate', 'Intermediate', 'Expert', '', 'ChIJBdiv1lAp3YAR3qiPBNJWr5o', 'Planet Fitness'),
(5, 'Tester', 'Tester', 'Testing', 18, 'Expert', 'Intermediate', 'Intermediate', 'Beginner', 'Beginner', '', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(6, 'Tester2', 'Aaron', 'Domingo', 25, 'Beginner', 'Beginner', 'Beginner', 'Beginner', 'Beginner', '', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(7, 'Tester3', 'Tester', '3', 3, 'Intermediate', 'Intermediate', 'Intermediate', 'Intermediate', 'Intermediate', '', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(8, 'DanTheMan', 'Dan', 'Patterson', 25, 'Expert', 'Expert', 'Expert', 'Expert', 'Expert', '', '', ''),
(9, 'Tester4', 'Tester', '4', 4, 'Intermediate', 'Intermediate', 'Intermediate', 'Intermediate', 'Intermediate', '', '', ''),
(10, 'test', '1', '1', 1, 'Expert', 'Beginner', 'Beginner', 'Intermediate', 'Intermediate', '', '', ''),
(12, 'Tester5', 'Aaron', 'Domingo', 25, 'Beginner', 'Beginner', 'Beginner', 'Beginner', 'Beginner', '', '', ''),
(13, 'ScheduleTest', 'Schedule', 'Test', 18, 'Beginner', 'Beginner', 'Beginner', 'Beginner', 'Beginner', '', '', ''),
(14, 'ScheduleTest2', 'Schedule', 'Test', 18, 'Beginner', 'Beginner', 'Beginner', 'Beginner', 'Beginner', '', '', ''),
(15, 'AyyAyyRonn', 'Aaron', 'Domingo', 25, 'Expert', 'Beginner', 'Beginner', 'Intermediate', 'Beginner', '', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(16, 'Mphaaan', 'Miranda', 'Phan', 24, 'Expert', 'Expert', 'Expert', 'Expert', 'Expert', '', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym'),
(17, 'Tester6', 'Test', 'Test', 18, 'Beginner', 'Intermediate', 'Intermediate', 'Beginner', 'Expert', '', '', ''),
(18, 'ScheduleFinal', 'Schedule', 'Guy', 25, 'Intermediate', 'Intermediate', 'Intermediate', 'Expert', 'Expert', '', '', ''),
(21, 'DanTheMan2', 'Dan', 'Patterson', 30, 'Expert', 'Intermediate', 'Intermediate', 'Expert', 'Expert', '', 'ChIJBdiv1lAp3YAR3qiPBNJWr5o', 'Planet Fitness'),
(22, 'ligmaass', 'uzair', 'ashraf', 25, 'Intermediate', 'Beginner', 'Beginner', 'Expert', 'Beginner', '', 'ChIJN0NR4zko3YARzZNNzuknP5A', 'Gold\'s Gym');

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
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;
--
-- AUTO_INCREMENT for table `gyms`
--
ALTER TABLE `gyms`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` smallint(50) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
