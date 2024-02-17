import { Routes, Route } from "react-router";
import "./App.css";
import Main from "./pages/WordsMain";
import Data from "./pages/WordsData";
import Word from "./pages/Words";

export default () => {
    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/letter/:term" element={<Data />} />
                <Route path="/word/:name" element={<Word />} />
            </Routes>
        </div>
    );
}

