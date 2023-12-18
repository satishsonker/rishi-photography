import { Route, Routes, HashRouter as Router } from "react-router-dom";
import './App.css';
import ErrorBoundary from "./components/errors/ErrorBoundary";
import UrlNotFound from "./components/errors/UrlNotFound";
import Header from "./components/common/header/Header";
import Home from "./components/home/Home";
import SideMenu from "./components/common/header/SideMenu";

function App() {
  return (
    <>
      <Router>
        <div className="main-wrapper">
          <Header></Header>
          <main style={{ marginTop: '0px' }}>
            <ErrorBoundary>
              <Routes>
                <Route path='*' element={<UrlNotFound />} />
                <Route path='/' element={<Home />} />
              </Routes>
            </ErrorBoundary>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
