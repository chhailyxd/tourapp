import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nabvar from "../components/Nabvar";
const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));
const Product = lazy(() => import("../components/Product"));
const Chat = lazy(() => import('../components/Chats'));

const RouteRender = () => {
    return(
        <React.Fragment>
            <Router>
                <Nabvar />
                <Routes>
                    <Route path="/tourapp" element={<Home />} />
                    <Route path="/tourapp/about" element={<About />} />
                    <Route path="/tourapp/product" element={<Product />} />
                    <Route path="/tourapp/chat" element={<Chat />} />
                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default RouteRender;