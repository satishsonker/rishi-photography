import { Route, Routes, HashRouter as Router,useLocation } from "react-router-dom";
import './App.css';
import { useEffect, useState } from "react";
import ErrorBoundary from "./components/errors/ErrorBoundary";
import UrlNotFound from "./components/errors/UrlNotFound";
import Header from "./components/common/header/Header";
import Home from "./components/home/Home";
import Services from "./components/common/Services/Services";
import GalleryView from "./components/common/Gallery/GalleryView";
function App() {
  const [hashValue, setHashValue] = useState("");
  

  return (
    <>
      <Router>
        <div className="main-wrapper">
          <Header setHashValue={setHashValue}></Header>
          <main style={{ marginTop: hashValue === "" ? '0px' : "90px" }}>
           <ErrorBoundary>
              <Routes>
                <Route path='*' element={<UrlNotFound />} />
                <Route path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/gallery' element={<GalleryView />} />
              </Routes>
            </ErrorBoundary>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
