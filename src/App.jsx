import Home from "./components/pages/Home/Home";
import Detail from "./components/pages/Detail/Detail";
import {Routes, Route} from "react-router-dom"
import Create from "./components/pages/Create/Create";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/book/:id" element={<Detail/>}/>
      <Route path="/edit/:id" element={<Create/>}/>
      <Route path="/new" element={<Create/>}/>
    </Routes>
    </>
  )
}

export default App
