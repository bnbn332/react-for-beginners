import Home from "./routes/Home";
import Detail from "./routes/Detail";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter path={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
