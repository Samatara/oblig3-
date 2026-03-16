import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import MoviePage from "./components/moviepage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:movie" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;