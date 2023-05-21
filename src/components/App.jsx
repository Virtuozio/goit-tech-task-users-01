import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "../pages/Layout";
const Home = lazy(() => import("../pages/Home"));
const Tweets = lazy(() => import("../pages/Tweets"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
