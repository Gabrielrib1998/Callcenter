-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28/11/2025 às 02:46
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `callcenter`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `ramais`
--

CREATE TABLE `ramais` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `statusramal` varchar(255) NOT NULL DEFAULT 'offline',
  `numeroramal` int(11) NOT NULL DEFAULT 0,
  `IPramal` varchar(100) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `ramais`
--

INSERT INTO `ramais` (`id`, `nome`, `statusramal`, `numeroramal`, `IPramal`) VALUES
(1, 'chaves', 'in use', 7000, '181.219.125.7'),
(2, 'kiko', 'ring', 7001, '181.219.125.7'),
(3, 'chiquinha', 'UNKNOWN', 7002, 'Unspecified'),
(4, 'nhonho', 'UNKNOWN', 7003, 'Unspecified'),
(5, 'godines', 'paused', 7004, '181.219.125.7'),
(6, 'Seu Madruga', 'available', 7005, '195.162.0.0');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `ramais`
--
ALTER TABLE `ramais`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `ramais`
--
ALTER TABLE `ramais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
