import { Routes, Route } from "react-router-dom"

import Caio from "./pages/Caio"
import Suzana from "./pages/Suzana"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Caio />} />
            <Route path="/suh" element={<Suzana />} />
        </Routes>

    )
}

export default Router