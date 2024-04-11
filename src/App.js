import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export const App = () => {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </BrowserRouter>
    </div>
}

