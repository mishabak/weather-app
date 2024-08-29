import "./App.css";

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<Navigate to={`weather`} />} />
          <Route path="/weather" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
