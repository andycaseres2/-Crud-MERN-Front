import React from "react"
import { TableEmpleados } from "./TableEmpleados"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <div className="w-full flex justify-between md:justify-around items-center px-4 py-8">
        <h1 className="text-2xl font-bold">Empleados</h1>
        <Link to={"/newempleado"}>
          <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold px-2 rounded py-2">
            Nuevo Empleado
          </button>
        </Link>
      </div>
      <TableEmpleados />
    </div>
  )
}
