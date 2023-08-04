import { BrowserRouter, Routes, Route } from "react-router-dom";
import TabBar from './components/TabBar';
import TestsMain from "./screens/Tests";
import InTest from "./screens/InTest";
import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/tests/*" element={<TestsMain />} > 
        </Route>
        <Route path="/results" element={<ResultsPage />} />
      </Routes>

      <TabBar />
    </BrowserRouter>
  );
}

function HomePage() {
  return <h1>Home Page</h1>;
}

function SettingsPage() {
  return <h1>Settings Page</h1>;
}



function ResultsPage() {
  return <h1>Results Page</h1>;
}
