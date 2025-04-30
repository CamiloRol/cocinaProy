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
-- Base de datos: `titanic_hotel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

CREATE TABLE `habitaciones` (
  `id` int(11) NOT NULL,
  `numero_habitacion` varchar(10) DEFAULT NULL,
  `tipo` enum('simple','doble','suite','familiar') NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `capacidad` int(11) DEFAULT NULL,
  `metros_cuadrados` int(11) DEFAULT NULL,
  `amenidades` text DEFAULT NULL,
  `estado` enum('disponible','ocupada','mantenimiento') DEFAULT 'disponible'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `habitaciones`
--

INSERT INTO `habitaciones` (`id`, `numero_habitacion`, `tipo`, `descripcion`, `precio`, `capacidad`, `metros_cuadrados`, `amenidades`, `estado`) VALUES
(1, '101', 'simple', 'Habitación sencilla con cama individual', 50.00, 1, 20, 'WiFi, TV', 'disponible'),
(2, '102', 'doble', 'Habitación doble con dos camas', 80.00, 2, 30, 'WiFi, TV, Ventilador', 'disponible'),
(3, '103', 'suite', 'Suite de lujo con jacuzzi', 200.00, 2, 50, 'WiFi, TV, Jacuzzi, Aire acondicionado', 'disponible'),
(4, '104', 'familiar', 'Habitación grande para familias', 150.00, 4, 60, 'WiFi, TV, Cocina, Ventilador', 'disponible'),
(5, '105', 'simple', 'Habitación sencilla económica', 45.00, 1, 18, 'WiFi, Ventilador', 'ocupada'),
(6, '106', 'doble', 'Habitación doble vista al mar', 90.00, 2, 35, 'WiFi, TV, Balcón', 'disponible'),
(7, '107', 'suite', 'Suite presidencial', 300.00, 2, 70, 'WiFi, TV, Jacuzzi, Balcón, Aire acondicionado', 'mantenimiento'),
(8, '108', 'familiar', 'Habitación familiar con cocina', 170.00, 5, 65, 'WiFi, TV, Cocina, Ventilador', 'disponible'),
(9, '109', 'simple', 'Habitación sencilla planta alta', 55.00, 1, 22, 'WiFi, TV', 'disponible'),
(10, '110', 'doble', 'Habitación doble balcón', 95.00, 2, 32, 'WiFi, TV, Balcón', 'disponible');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_habitaciones`
--

CREATE TABLE `imagenes_habitaciones` (
  `id` int(11) NOT NULL,
  `habitacion_id` int(11) DEFAULT NULL,
  `url_imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenes_habitaciones`
--

INSERT INTO `imagenes_habitaciones` (`id`, `habitacion_id`, `url_imagen`) VALUES
(1, 1, 'https://www.w3schools.com/w3images/livingroom.jpg'),
(2, 1, 'https://www.w3schools.com/w3images/diningroom.jpg'),
(3, 1, 'https://www.w3schools.com/w3images/bedroom.jpg'),
(4, 1, 'https://www.w3schools.com/w3images/livingroom2.jpg'),
(5, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/666146239.jpg?k=e73d05941a1410c60a558547a4ec7addc105e3fb61f93f38a3df820211e04d64&o=&hp=1'),
(6, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/666146237.jpg?k=077e1066d7c3c17b33a864c7d69687754f2dad9164d1b91723ba18b525736066&o=&hp=1'),
(7, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/666146238.jpg?k=83be05213f355fd8d2d10978a99ab2934b31a4e2e8159a0dbf8b54688838a8db&o=&hp=1'),
(8, 2, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/670837694.jpg?k=838891dcbaf0118e40012f8154ea838a1518c46a689692437a837918c08884c4&o=&hp=1'),
(9, 3, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/513002281.jpg?k=efc3ced7eaa5e4979a64a713b5955176b1b60b29dec799fc27c9c776c793b674&o=&hp=1'),
(10, 3, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/513002026.jpg?k=1514ff07b10411f9ea11adb3a1476420a8b3e5ef94bca83653fbe417a46853f3&o=&hp=1'),
(11, 3, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/512429811.jpg?k=7f629d228f88543ddd802d5b87e4333072fec1de8872ad59c407f5fe76b503bb&o=&hp=1'),
(12, 3, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/523899956.jpg?k=fa4988719a6dccae2fc305f353c1f48c63904cfd71daa94f1f23789c6ab9dc49&o=&hp=1'),
(13, 4, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/578875696.jpg?k=8b9abfa3e6a14a3e6f59a44d65baf0a4525ec43bc6e590558597d96f16fe0d6d&o=&hp=1'),
(14, 4, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/422178259.jpg?k=3191db97582f0e357682a609b8f4d61d7e40bf8b4706286adb57d11bf62c29bb&o=&hp=1'),
(15, 4, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/422178268.jpg?k=1bbbde44552a4c2d4827638accd0d7e1cbddb425a4d0829373b15cb001c29698&o=&hp=1'),
(16, 4, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/422178282.jpg?k=c7040f7ede1b695ca2c3afd13ae2606623c9ede2df0e234a9f12ec48baebd8aa&o=&hp=1'),
(17, 5, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/663962748.jpg?k=86e0feaf2e4272b94e02cfe31dc42c6fd9c92d4d0742cf34c825dedadcff054c&o=&hp=1'),
(18, 5, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/663960127.jpg?k=7b54f5c0a45af42c4b97a230994371c21a3f409287ed8f8abeca14d506608a1a&o=&hp=1'),
(19, 5, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/663960149.jpg?k=4222bcb84d401c3d915962d5e6ed5d1f21ffe8a1a691abcaa2e10f31cd8a6219&o=&hp=1'),
(20, 5, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/663960332.jpg?k=f55e55ecae14c549aa1f96a1cfec315b478ccddab87cb26a43fa8b9911ec45bd&o=&hp=1'),
(21, 6, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/520771115.jpg?k=50b43943ed1f55980ca621b58d09ab8803a5587008b17659331364163bc0c8e2&o=&hp=1'),
(22, 6, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/504095061.jpg?k=50150de478ef6525cf01218322c47c16bce529cfaf798db420461e3a54af6ff4&o=&hp=1'),
(23, 6, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/504094664.jpg?k=639592eb20d544dcdc6a9347d847f1e10b56bee10f425810fb7261689d1e9402&o=&hp=1'),
(24, 6, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/504094666.jpg?k=dc62533a7136166de2eda07f723ae7a9a57f03a2c71603dc06263123072ce6a0&o=&hp=1'),
(25, 7, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/426907916.jpg?k=28fbf718bcd250327bffe4c4de5fd59932d4385c17a53beb40e041a041408168&o=&hp=1'),
(26, 7, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/411206619.jpg?k=6b7a74a70e10bcef4e05f5b33b2841c337835c568ace1d02bab08e7501e3e169&o=&hp=1'),
(27, 7, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/426907994.jpg?k=706213c914237e97b0e0c5033b0a47eb992d5fbb26a02a144af4d8349c4f6938&o=&hp=1'),
(28, 7, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/426907700.jpg?k=c73df7ec5a5a5f0d6ddba41c933cc77b0aad69f8f9b1b8245ed09a88593dcca9&o=&hp=1'),
(29, 8, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/337704076.jpg?k=0d7f7a08da548fb6aac0f282185c2e287de64fc57d1e9a258a6db96d2d9de347&o=&hp=1'),
(30, 8, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/333855988.jpg?k=52b2ce1ffd9cd8e5ce9a4bbfef065d3ca9c093abb4772e73b88000cf7eddf9be&o=&hp=1'),
(31, 8, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/333855664.jpg?k=fde689266c0258e036748f20ad1d3a00c477a00fbb46248201174aaa2b57e006&o=&hp=1'),
(32, 9, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/495291458.jpg?k=00c8155be8fe5768fd2dc001cb424f3dc22fc308555c91bc2d85f717d5315e45&o=&hp=1'),
(33, 9, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/495291576.jpg?k=7906356e50265e1857c28ba71650740e39091a8372713cd383b726ab6c9f6d81&o=&hp=1'),
(34, 9, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/495291698.jpg?k=aef9ccd3b9b9011a04d130144d56b25764a77b1b07b7ceed0775ef8c95b7fc8d&o=&hp=1'),
(35, 10, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/475946811.jpg?k=d4b22256d8abdceeaf4cc064f09df0d126bcc08616aa5234e8e4826bbf57daac&o=&hp=1'),
(36, 10, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/475946888.jpg?k=e996d8aa87dea57bb06d4c6828cfe0eaa4d35551e23e122c8a865e298b70b7af&o=&hp=1'),
(37, 10, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/475946930.jpg?k=8b028f98d653fcc6097645967fd8f44359147a3b5da5a9d2faccceccc064f15b&o=&hp=1'),
(38, 10, 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/475946882.jpg?k=2dd3d8f88cec8aa9114b8ab8a01c19b8c4ed30ca5d52e8ed67390942a9d4f066&o=&hp=1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id` int(11) NOT NULL,
  `reserva_id` int(11) DEFAULT NULL,
  `monto` decimal(10,2) DEFAULT NULL,
  `metodo_pago` enum('efectivo','tarjeta_credito','transferencia') NOT NULL,
  `fecha_pago` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`id`, `reserva_id`, `monto`, `metodo_pago`, `fecha_pago`) VALUES
(1, 1, 100.00, 'tarjeta_credito', '2025-04-27 03:09:17'),
(2, 3, 400.00, 'efectivo', '2025-04-27 03:09:17'),
(3, 4, 300.00, 'transferencia', '2025-04-27 03:09:17'),
(4, 5, 135.00, 'tarjeta_credito', '2025-04-27 03:09:17'),
(5, 6, 270.00, 'efectivo', '2025-04-27 03:09:17'),
(6, 7, 600.00, 'transferencia', '2025-04-27 03:09:17'),
(7, 8, 510.00, 'tarjeta_credito', '2025-04-27 03:09:17'),
(8, 9, 110.00, 'efectivo', '2025-04-27 03:09:17'),
(9, 10, 285.00, 'tarjeta_credito', '2025-04-27 03:09:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `habitacion_id` int(11) DEFAULT NULL,
  `fecha_entrada` date DEFAULT NULL,
  `fecha_salida` date DEFAULT NULL,
  `estado` enum('pendiente','confirmada','cancelada') DEFAULT 'pendiente',
  `fecha_reserva` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `usuario_id`, `habitacion_id`, `fecha_entrada`, `fecha_salida`, `estado`, `fecha_reserva`) VALUES
(1, 1, 1, '2025-05-01', '2025-05-03', 'confirmada', '2025-04-27 03:09:17'),
(2, 2, 2, '2025-05-05', '2025-05-07', 'pendiente', '2025-04-27 03:09:17'),
(3, 4, 3, '2025-05-10', '2025-05-12', 'confirmada', '2025-04-27 03:09:17'),
(4, 5, 4, '2025-05-08', '2025-05-10', 'cancelada', '2025-04-27 03:09:17'),
(5, 6, 5, '2025-05-15', '2025-05-18', 'confirmada', '2025-04-27 03:09:17'),
(6, 8, 6, '2025-05-20', '2025-05-23', 'pendiente', '2025-04-27 03:09:17'),
(7, 9, 7, '2025-05-22', '2025-05-24', 'confirmada', '2025-04-27 03:09:17'),
(8, 10, 8, '2025-05-25', '2025-05-27', 'pendiente', '2025-04-27 03:09:17'),
(9, 1, 9, '2025-06-01', '2025-06-03', 'confirmada', '2025-04-27 03:09:17'),
(10, 2, 10, '2025-06-05', '2025-06-08', 'confirmada', '2025-04-27 03:09:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `rol` enum('admin','cliente','recepcionista') NOT NULL DEFAULT 'cliente',
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `contrasena`, `rol`, `fecha_creacion`) VALUES
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
ALTER TABLE `habitaciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `numero_habitacion` (`numero_habitacion`);

--
-- Indices de la tabla `imagenes_habitaciones`
--
ALTER TABLE `imagenes_habitaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `habitacion_id` (`habitacion_id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reserva_id` (`reserva_id`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `habitacion_id` (`habitacion_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `imagenes_habitaciones`
--
ALTER TABLE `imagenes_habitaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `imagenes_habitaciones`
--
ALTER TABLE `imagenes_habitaciones`
  ADD CONSTRAINT `imagenes_habitaciones_ibfk_1` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`reserva_id`) REFERENCES `reservas` (`id`);

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
