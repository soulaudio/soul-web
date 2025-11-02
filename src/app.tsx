import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Label from "./pages/label";
import Artist from "./pages/artist";
import NotFound from "./pages/not-found";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/label" element={<Label />} />
        <Route path="/artists/:id" element={<Artist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;