import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./context/pages/LandingPage"

import Signup1 from "./components/Signup"
import { UserProvider } from "./context/UserContext/usercontext"

const App = () => {
  return (
      <BrowserRouter>
        <UserProvider>
          <Routes>
              <Route path="/landing" element={<LandingPage/>} />
          </Routes>
        </UserProvider>
      </BrowserRouter>

  )
}

export default App
