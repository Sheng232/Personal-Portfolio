import { BrowserRouter, Route, Routes } from "react-router-dom"
import  Home from "./pages/Home"
import  Layout  from "./pages/Layout"
import InstaHome from "./pages/InstaHome"
import InstaSearch from "./pages/InstaSearch"
import InstaReels from "./pages/InstaReels"
import InstaMessages from "./pages/InstaMessages"
import InstaProfile from "./pages/InstaProfile"

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="Personal-Portfolio/" element={<InstaHome />}/>
          <Route path="Personal-Portfolio/Search" element={<InstaSearch />} />
          <Route path="Personal-Portfolio/Reels" element={<InstaReels />} />
          <Route path="Personal-Portfolio/Messages" element={<InstaMessages />} />
          <Route path="Personal-Portfolio/Profile" element={<InstaProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
