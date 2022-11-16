import { Home } from "./Components/Home"
import { NewEmpleado } from "./Components/NewEmpleado"
import { EditEmpleado } from "./Components/EditEmpleado"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./Components/Header"

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newempleado" element={<NewEmpleado />} />
          <Route path="/editempleado/:id" element={<EditEmpleado />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
