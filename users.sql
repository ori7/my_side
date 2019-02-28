-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2019 at 09:16 PM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8_bin NOT NULL,
  `email` varchar(50) COLLATE utf8_bin NOT NULL,
  `phone` varchar(20) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `phone`) VALUES
(1, 'dsf', 'sdf', 'sdf'),
(2, 'dsf', 'sdf', 'sdf'),
(3, 'dsfds', 'sdfsdf', 'sdfsdf'),
(4, 'dsfds', 'sdfsdf', 'sdfsdf'),
(5, 'sda', 'safd', 'asd'),
(6, 'sda', 'safd', 'asd'),
(7, 's', 'asc', 'undefined'),
(8, 's', 'asc', 'sdf'),
(9, 'ssad', 'ascsdf', 'sdfsdf'),
(10, 'opipoi', 'iop', 'yrteyre'),
(11, 'dgdff', 'dfgfg', 'yrteyrfdgdfge'),
(12, 's', 'asc', 'undefined'),
(13, 's', 'asc', 'sdf'),
(14, 'dgdff', 'dfgfg', 'yrteyrfdgdfge'),
(15, 'ssad', 'ascsdf', 'sdfsdf'),
(16, 'opipoi', 'iop', 'yrteyre'),
(17, 's', 'dfs', 'dgfdg'),
(18, 's', 'dfs', 'dgfdg'),
(19, 's', 'dfs', 'dgfdg'),
(20, 's', 'dfs', 'dgfdg'),
(21, 'dsfsdf', 'dfssdfsdf', 'dgfdgsdfdfssdf'),
(22, 'dsfsdf', 'dfssdfsdf', 'dgfdgsdfdfssdf'),
(23, 'gfgfdg', 'ghfhghfg', 'ghfghfghfgh'),
(24, 'gfgfdg', 'ghfhghfg', 'ghfghfghfgh'),
(25, 'sadff', 'dfsdfgsdf', 'sdf'),
(26, 'sadff', 'dfsdfgsdf', 'sdf'),
(27, 'dfgfdgdfgdfgfg', 'fdg', 'sdf'),
(28, 'dfgfgfg', 'fdgfsdfsd', 'sdfdfs'),
(29, 'uyiuyiu', 'uiyiu', 'iyui'),
(30, 'sadff', 'dfsdfgsdf', 'sdf'),
(31, 'dfs', 'dsf', 'sdffgsdfg'),
(32, 'sadff', 'dfsdfgsdf', 'sdf'),
(33, 'dfgfdgdfgdfgfg', 'fdg', 'sdf'),
(34, 'dfgfgfg', 'fdgfsdfsd', 'sdfdfs'),
(35, 'uyiuyiu', 'uiyiu', 'iyui'),
(36, 'dfs', 'dsf', 'sdffgsdfg'),
(37, 'sdfsdf', 'dfstfdfg', 'dfgdg'),
(38, 'sdfsdf', 'dfstfdfg', 'dfgdg'),
(39, 'sdfsdf', 'dfstfdfg', 'dfgdg'),
(40, 'dfg', 'dfs', 'd'),
(41, 'f', 'f', 'f'),
(42, 'f', 'f', 'f'),
(43, 'f', 'f', 'f'),
(44, 'f', 'f', 'f'),
(45, 'sxc', 'zxc', 'zxc'),
(46, 'sdf', 'sdfdfssdfsdfsdf', 'dsd'),
(47, 'sdf', 'sdfdfssdfsdfsdf', 'dsd'),
(48, 'df', 'erwwee', 'erwwerrw');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
