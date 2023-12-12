import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import CarPage from "./pages/car/CarPage";


function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<CarPage />} />
                    <Route path="post/:id" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;



