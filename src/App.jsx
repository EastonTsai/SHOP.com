
import "app.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import ProductPage from "pages/ProductPage";
import AdminPage from "pages/AdminPage";

const basename = process.env.PUBLIC_URL
function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
