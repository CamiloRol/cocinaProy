-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-04-2025 a las 07:23:48
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cuccinadivina`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `name_recipe` varchar(55) DEFAULT NULL,
  `tipo` enum('Plato principales','Entrantes','Postres','Guisos') NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `status` enum('Disponible','No disponible') DEFAULT 'Disponible'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `habitaciones`
--

INSERT INTO `recipes` (`id`, `name_recipe`, `tipo`, `description`, `price`, `time`, `status`) VALUES
(1, 'Paella Valenciana', 'Platos principales', 'La auténtica receta tradicional de paella valenciana.', 18.00, 45, 'Disponible'),
(2, 'Tortilla Española', 'Entrantes', 'Deliciosa tortilla de patatas al estilo tradicional.', 7.00, 30, 'Disponible'),
(3, 'Gazpacho Andaluz', 'Entrantes', 'Refrescante sopa fría perfecta para el verano.', 11.00, 20, 'No disponible'),
(4, 'Flan de Huevo', 'Postres', 'Postre casero con caramelo y textura perfecta.', 4.00, 60, 'Disponible'),
(5, 'Croquetas de Jamón', 'Entrantes', 'Crujientes por fuera y cremosas por dentro.', 1.50, 40, 'Disponible'),
(6, 'Arroz con Leche', 'Postres', 'Postre tradicional con canela y limón.', 4.50, 35, 'Disponible'),
(7, 'Arroz de Sepia', 'Platos principales', 'Arroz tradicional con sepia', 28.00, 22, 'Disponible'),
(8, 'Guiso de carcamusas de toledo', 'Guisos', 'Comida tradicional de cerdo cocinado con tomate , guisantes y picante', 58.00, 62, 'Disponible'),
(9, 'Acarpaccio de remolacha con burrata', 'Postres', 'El carpaccio de remolacha,  inspirado en la tradición italiana del carpaccio pero con un giro vegetal', 120.00, 15, 'Disponible');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_recipes`
--

CREATE TABLE `imagenes_recipes` (
  `id` int(11) NOT NULL,
  `recipe_id` int(11) DEFAULT NULL,
  `url_imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenes_recipes`
--

INSERT INTO `imagenes_recipes` (`id`, `recipe_id`, `url_imagen`) VALUES
(1, 1, 'https://th.bing.com/th/id/R.b1cb3ad4d6dad2d04bc3f7c8a37ef662?rik=nn0z5fx6Uvfpog&pid=ImgRaw&r=0'),
(2, 2, 'https://th.bing.com/th/id/OIP.fOWRmQQgEhjueANMW8k7kgHaE8?rs=1&pid=ImgDetMain'),
(3, 3, 'https://th.bing.com/th/id/OIP.dB9RW6g_PNnGgPKOwv-sQQHaEK?rs=1&pid=ImgDetMain'),
(4, 4, 'https://th.bing.com/th/id/OIP.wn3rjjMH87V8BEvV9-4YfAHaEK?rs=1&pid=ImgDetMain'),
(5, 5, 'https://th.bing.com/th/id/OIP.DuVJTk52fGEgctmcvn6fvQHaF7?rs=1&pid=ImgDetMain'),
(6, 6, 'https://th.bing.com/th/id/OIP.2URSvL4HIYws1kGCQHsxngHaFj?rs=1&pid=ImgDetMain'),
(7, 7, 'https://www.divinacocina.es/wp-content/uploads/2025/04/ensalada-de-sepia-vv-1.jpg'),
(8, 8, 'https://www.divinacocina.es/wp-content/uploads/2025/03/carcamusas-toledanas-v.jpg'),
(9, 9, 'https://www.divinacocina.es/wp-content/uploads/2017/06/carpaccio-de-remolacha-con-burrata.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `monto` decimal(10,2) DEFAULT NULL,
  `metodo_pago` enum('efectivo','tarjeta_credito','transferencia') NOT NULL,
  `fecha_pago` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`id`, `order_id`, `monto`, `metodo_pago`, `fecha_pago`) VALUES
(1, 1, 45.00, 'tarjeta_credito', '2025-04-27 03:09:17'),
(2, 3, 720.00, 'efectivo', '2025-04-27 03:09:17'),
(3, 4, 1.50, 'transferencia', '2025-04-27 03:09:17'),
(4, 5, 91.00, 'tarjeta_credito', '2025-04-27 03:09:17'),
(5, 6, 1500.20, 'efectivo', '2025-04-27 03:09:17'),
(6, 7, 600.00, 'transferencia', '2025-04-27 03:09:17'),
(7, 8, 510.00, 'tarjeta_credito', '2025-04-27 03:09:17'),
(8, 9, 110.00, 'efectivo', '2025-04-27 03:09:17'),
(9, 10, 285.00, 'tarjeta_credito', '2025-04-27 03:09:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `us-name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rol` enum('admin','cliente','recepcionista') NOT NULL DEFAULT 'cliente',
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `users` (`id`, `us-name`, `email`, `password`, `rol`, `fecha_creacion`) VALUES
(1, 'Ana García', 'ana@gmail.com', 'pass123', 'cliente', '2025-04-27 03:05:23'),
(2, 'Luis Pérez', 'luis@gmail.com', 'pass123', 'cliente', '2025-04-27 03:05:23'),
(3, 'Carlos Sánchez', 'carlos@gmail.com', 'pass123', 'recepcionista', '2025-04-27 03:05:23'),
(4, 'María López', 'maria@gmail.com', 'pass123', 'cliente', '2025-04-27 03:05:23'),
(5, 'Pedro Gómez', 'pedro@gmail.com', 'pass123', 'cliente', '2025-04-27 03:05:23'),
(6, 'Laura Ruiz', 'laura@gmail.com', 'pass123', 'cliente', '2025-04-27 03:05:23'),
(7, 'Jorge Torres', 'jorge@gmail.com', 'pass123', 'admin', '2025-04-27 03:05:23'),
(8, 'Claudia Mendoza', 'claudia@gmail.com', 'pass123', 'recepcionista', '2025-04-27 03:05:23'),
(9, 'Fernando Díaz', 'fernando@gmail.com', 'pass123', 'cliente', '2025-04-27 03:05:23'),
(10, 'Sofía Herrera', 'sofia@gmail.com', 'pass123', 'cliente', '2025-04-27 03:05:23');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `habitaciones`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name_recipe` (`name_recipe`);

--
-- Indices de la tabla `imagenes_habitaciones`
--
ALTER TABLE `imagenes_recipes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recipe_id` (`recipe_id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);
--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `imagenes_habitaciones`
--
ALTER TABLE `imagenes_recipes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `imagenes_habitaciones`
--
ALTER TABLE `imagenes_recipes`
  ADD CONSTRAINT `imagenes_recipes_ibfk_1` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`) ON DELETE CASCADE;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
