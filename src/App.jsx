import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import NoPage from "./pages/NoPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="movies/:slug" element={<MovieDetail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
};

export default App;
