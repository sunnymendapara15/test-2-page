import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import DashboardPage from './pages/DashboardPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <div className="app-shell">
      <div className="background-layer" aria-hidden="true">
        <span className="orb orb-one" />
        <span className="orb orb-two" />
      </div>
      <NavBar />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
