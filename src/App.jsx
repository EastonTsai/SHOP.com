
import "app.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";

const basename = process.env.PUBLIC_URL
function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
