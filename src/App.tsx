import {Route, Routes} from "react-router";
import AboutMe from "./components/about-me/AboutMe.tsx";
import Header from "./components/headers/Header.tsx"
import './App.css'

function App() {

  return (
      <div className="App">
                  <Header/>
                  <Routes>
                      <Route path="/" Component={AboutMe} />
                      {/*<Route path="/features" Component={Features} />*/}
                      {/*<Route path="/contact" Component={Contact} />*/}
                      {/*<Route path="/features/EmailAuth" element={<Authpage />} />*/}
                  </Routes>
      </div>
  )
}

export default App
