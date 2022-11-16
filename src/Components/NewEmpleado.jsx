import React from "react"
import { Formik, Form, Field } from "formik"
import { PostNewEmpleado } from "../Services/services"
import { useNavigate } from "react-router-dom"
import { AiOutlineArrowLeft } from "react-icons/ai"

export const NewEmpleado = () => {
  let navigate = useNavigate()

  const initialValues = {
    name: "",
    surname: "",
    address: "",
    phone: "",
  }
  return (
    <div className="w-full flex flex-col px-2 md:px-20 ">
      <div className="w-full flex justify-between items-center px-4 md:px-20 py-10">
        <button
          onClick={() => navigate("/")}
          type="submit"
          className="bg-blue-500  hover:bg-blue-700 text-white font-bold px-4 rounded py-2"
        >
          <AiOutlineArrowLeft />
        </button>
        <h1 className="text-2xl font-bold">Nuevo Empleado</h1>
      </div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          PostNewEmpleado({ values })
          resetForm()
        }}
      >
        {(formik) => {
          return (
            <div className="w-full px-8 md:px-32 ">
              <Form>
                <div className="w-full flex flex-col gap-4 justify-between items-center">
                  <div className="w-full flex justify-between items-center">
                    <label className="font-bold" htmlFor="email">
                      Name
                    </label>
                    <Field
                      className={
                        "focus:outline-none shadow rounded bg-gray-200 py-1 px-1"
                      }
                      type="text"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <label className="font-bold" htmlFor="email">
                      Surname
                    </label>
                    <Field
                      className={
                        "focus:outline-none shadow rounded bg-gray-200 py-1 px-1"
                      }
                      type="text"
                      name="surname"
                      id="surname"
                    />
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <label className="font-bold" htmlFor="email">
                      Address
                    </label>
                    <Field
                      className={
                        "focus:outline-none shadow rounded bg-gray-200 py-1 px-1"
                      }
                      type="text"
                      name="address"
                      id="address"
                    />
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <label className="font-bold" htmlFor="email">
                      Phone
                    </label>
                    <Field
                      className={
                        "focus:outline-none shadow rounded bg-gray-200 py-1 px-1"
                      }
                      type="text"
                      name="phone"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="w-full flex justify-center py-10">
                  <button
                    type="submit"
                    className="bg-blue-500  hover:bg-blue-700 text-white font-bold px-4 rounded py-2"
                  >
                    Guardar
                  </button>
                </div>
              </Form>
            </div>
          )
        }}
      </Formik>
    </div>
  )
}
