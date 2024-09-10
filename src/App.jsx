import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./features/layout";
import "./assets/styles/app.css";
import { Icon_Loader } from "./components/icons";

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/notFound"));
const List = lazy(() => import("./pages/list"));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Icon_Loader />}>
          <Routes>
            <Route path="/" element={<Navigate to={`weather`} />} />
            <Route path="/weather" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
