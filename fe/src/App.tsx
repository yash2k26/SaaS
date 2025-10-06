import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./context/pages/LandingPage"

import Signup1 from "./components/Signup"
import { UserProvider } from "./context/UserContext/usercontext"
import Pricing from "./components/pricing"

const App = () => {
  return (
      <BrowserRouter>
        <UserProvider>
          <Routes>
              <Route path="/landing" element={<LandingPage/>} />
              <Route path="/pricing" element={<Pricing/>} />
          </Routes>
        </UserProvider>
      </BrowserRouter>

  )
}

export default App
