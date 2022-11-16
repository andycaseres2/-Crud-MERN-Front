const URL = "http://localhost:5000/persons/"

export const GetAllEmpleados = () => {
  return fetch(`${URL}`)
    .then((res) => res.json())
    .then((data) => data)
}
export const GetEmpleado = (id) => {
  return fetch(`${URL}${id}`)
    .then((res) => res.json())
    .then((data) => data)
}

export const PostNewEmpleado = ({ values }) => {
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(values),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.text()) // or res.json()
    .then((res) => console.log(res))
}

export const UpdateEmpleado = ({ id, values }) => {
  return fetch(`${URL}${id}`, {
    method: "PUT",
    body: JSON.stringify(values),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.text()) // or res.json()
    .then((res) => console.log(res))
}
export const DeleteEmpleado = (id) => {
  return fetch(`${URL}${id}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.text()) // or res.json()
    .then((res) => console.log(res))
}
