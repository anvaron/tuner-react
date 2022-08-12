// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home     from "./Pages/Home";
import Index    from "./Pages/Index";
import Show     from "./Pages/Show";
import Edit     from "./Pages/Edit";
import New      from "./Pages/New";
import NotFound from "./Pages/NotFound";

// COMPONENTS
import NavBar from "./Components/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route exact path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;