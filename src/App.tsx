import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
