import React, { useState, useEffect } from "react"
import { GetAllEmpleados } from "../Services/services"
import { Empleado } from "./Empleado"

export const TableEmpleados = () => {
  const [empleados, setEmpleados] = useState([])

  useEffect(() => {
    GetAllEmpleados().then((data) => setEmpleados(data))
  }, [empleados])
  return (
    <div className="overflow-x-auto px-2 md:px-20">
      <table className="table table-compact w-full">
        <thead className="pb-4">
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        {empleados.map((empleado) => {
          return <Empleado key={empleado.id} empleado={empleado} />
        })}
        {/* <tfoot className="pt-4">
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </tfoot> */}
      </table>
    </div>
  )
}
