import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./pages/Container";
import "../public/css/main.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
