-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 04, 2021 at 03:54 PM
-- Server version: 5.7.23
-- PHP Version: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fahamnidb`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `specialite` varchar(255) DEFAULT NULL,
  `niveau` varchar(255) DEFAULT NULL,
  `matiere` varchar(255) DEFAULT NULL,
  `chapitre` varchar(255) DEFAULT NULL,
  `justificatif` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `image_courses` varchar(255) DEFAULT NULL,
  `prix` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `justi_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `specialite`, `niveau`, `matiere`, `chapitre`, `justificatif`, `time`, `image_courses`, `prix`, `type`, `justi_image`) VALUES
(1, 'Dev', 'Novice', 'Java', 'Init', 'Certificat 1A', 'Sunday 13-12-2020 ', 'java.jpg', '60 dt', 'k', 'certif1.jpg'),
(2, 'Dev', 'Amateur', 'Swift', 'Core Data', 'Certificat 1B', 'Monday 14-12-2020 ', 'swift.jpg', '40 dt', '22k', 'certif2.jpg'),
(3, 'Dev', 'Pro', 'NodeJs', 'Parsing', 'Certificat 2C', 'Tuesday 15-12-2020 ', 'nodejs.jpg', '50 dt', 'h', 'certif2.jpg'),
(4, 'Dev', 'Pro', 'Java', 'POOI', 'Certificat 3B', 'Thursday 17-12-2020 ', 'java.jpg', '69 dt', 'k', ' certif2.jpg'),
(5, 'Dev', 'Pro', 'Java', 'POO', 'Certificat 3B', 'Friday 18-12-2020 ', 'java.jpg', '69 dt', 'k', ' certif2.jpg'),
(6, 'Dev', 'Pro', 'Java', 'POOx', 'Certificat 3B', 'Friday 18-12-2020 ', 'java.jpg', '69 dt', 'k', ' certif2.jpg'),
(7, 'h', 'hkjh', 'java', 'hkjh', 'ok', '30-12-2021', 'java.jpg', 'hkj', 'j', 'certif2.jpg'),
(8, 'java.jpg', 'Pro', 'Java', 'POO', 'Certificat 3B', 'Monday wasalem ', 'Java.jpg', '69 dt', 'ktest', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `etudiant`
--

CREATE TABLE `etudiant` (
  `id_etudiant` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `etudiant`
--

INSERT INTO `etudiant` (`id_etudiant`, `nom`) VALUES
(1, 'okk');

-- --------------------------------------------------------

--
-- Table structure for table `proposition`
--

CREATE TABLE `proposition` (
  `id` int(11) NOT NULL,
  `id_course` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `proposition`
--

INSERT INTO `proposition` (`id`, `id_course`, `id_user`) VALUES
(1, 3, 8),
(2, 3, 1),
(3, 1, 9),
(4, 1, 8);

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `id_reservation` int(11) NOT NULL,
  `date_reservation` date NOT NULL,
  `mode` varchar(255) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_etudiant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id_reservation`, `date_reservation`, `mode`, `id_user`, `id_etudiant`) VALUES
(1, '2020-01-09', 'presentiel', 1, 1),
(2, '2020-12-15', 'preseniel', 8, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `departement` varchar(255) DEFAULT NULL,
  `niveau` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `image_user` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `departement`, `niveau`, `email`, `telephone`, `image_user`, `password`) VALUES
(1, 'bilel', 'bolbol', '5sim3', 'novice', 'bilel@gmail.com', '23782367', '12', '123'),
(6, 'bilel', 'dhouibi', '5sim3', 'oo', 'bilel@gmail.com', '50644357', '12', 'o'),
(7, 'h', 'h', 'h', 'h', 'h', 'h', '12', 'h'),
(8, 'dora', 'tekaya', 'oo', 'qq', 'hh', '23456789', '12', 'hh'),
(9, 'v', 'v', 'v', 'v', 'v', 'v', '12', 'v');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`id_etudiant`);

--
-- Indexes for table `proposition`
--
ALTER TABLE `proposition`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_course` (`id_course`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id_reservation`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_etudiant` (`id_etudiant`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `etudiant`
--
ALTER TABLE `etudiant`
  MODIFY `id_etudiant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `proposition`
--
ALTER TABLE `proposition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id_reservation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `proposition`
--
ALTER TABLE `proposition`
  ADD CONSTRAINT `proposition_ibfk_1` FOREIGN KEY (`id_course`) REFERENCES `courses` (`id`),
  ADD CONSTRAINT `proposition_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `reservation_ibfk_2` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiant` (`id_etudiant`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
