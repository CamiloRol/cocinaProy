import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2>Error 404, página no encontrada</h2>
      <Link to={"/"}>Regresar a Home</Link>
    </>
  )
}
