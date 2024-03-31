import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import MealSelection from "./components/MealSelection/MealSelection";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">CookEat</header>
        <div className="app-page">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/meal-selection" element={<MealSelection />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
