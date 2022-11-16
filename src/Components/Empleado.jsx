import React from "react"
import { DeleteEmpleado } from "../Services/services"
import { Link } from "react-router-dom"
import { MdDeleteForever } from "react-icons/md"
import { TbEdit } from "react-icons/tb"

export const Empleado = ({ empleado }) => {
  return (
    <tbody className="w-full text-center">
      <tr>
        <td>{empleado.name}</td>
        <td>{empleado.surname}</td>
        <td>{empleado.address}</td>
        <td>{empleado.phone}</td>
        <td>
          <div className="w-full justify-center items-center flex gap-2 px-1">
            <Link to={`/editempleado/${empleado.id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded py-1">
                <TbEdit />
              </button>
            </Link>
            <button
              onClick={() => DeleteEmpleado(empleado.id)}
              className="bg-red-500  hover:bg-red-700 text-white font-bold px-2 rounded py-1"
            >
              <MdDeleteForever />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  )
}
