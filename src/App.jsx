import { Routes, Route } from "react-router-dom";
import MyMatch from "./Pages/MyMatch";
import MatchDetails from "./Pages/MatchDetails";
import Scorecard404NotFound from "./Pages/Scorecard404NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyMatch />} />
      <Route path="/:type/:id" element={<MatchDetails />} />

      {/* Catch-all route for 404 - this should be LAST */}
      <Route path="*" element={<Scorecard404NotFound />} />
    </Routes>
  );
}

export default App;
