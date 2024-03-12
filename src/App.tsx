import { Route, Routes } from "react-router-dom"
import { Layout } from "./Layout"
import { Support } from "./pages/Support/Support"
import { Main } from "./pages/Main/Main"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/main" element={<Main />} />
        <Route path="/support" element={<Support />} />
        <Route path="/duels" element={<Support />} />
      </Route>
    </Routes>
  )
}

export default App
