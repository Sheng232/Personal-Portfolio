import { HashRouter, Route, Routes } from "react-router-dom"
import  Home from "./pages/Home"
import  Layout  from "./pages/Layout"
import InstaHome from "./pages/InstaHome"
import InstaSearch from "./pages/InstaSearch"
import InstaReels from "./pages/InstaReels"
import InstaMessages from "./pages/InstaMessages"
import InstaProfile from "./pages/InstaProfile"

function App() {
  return(
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<InstaHome />}/>
          <Route path="/Search" element={<InstaSearch />} />
          <Route path="/Reels" element={<InstaReels />} />
          <Route path="/Messages" element={<InstaMessages />} />
          <Route path="/Profile" element={<InstaProfile />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
