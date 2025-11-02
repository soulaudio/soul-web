import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Label from "./pages/label";
import Artist from "./pages/artist";
import NotFound from "./pages/not-found";
import HashRedirect from "./hash-redirect";

const App = () => {
  return (
    <Router>
      <HashRedirect />
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