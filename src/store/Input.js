import { configureStore } from "@reduxjs/toolkit";
import Words from "./Filter";

export default configureStore({
    reducer: {
        "words": Words
    }
})