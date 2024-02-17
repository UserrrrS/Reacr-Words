import { createSlice } from "@reduxjs/toolkit";
import list from "../assets/data/WordsList.json";

const initialState = {
    data: list
}

const DataDel = createSlice({
    name: "name",
    initialState,
    reducers: {
        AddSome(state, action) {
            const ans = action.payload;
            if (typeof ans === "object") {
                const [prev, next] = [...ans];
                const res = state.data.filter(el => el.toLowerCase() === next.toLowerCase())
                if (!res.length) {
                    state.data = state.data.map(el => {
                        el.toLowerCase() === prev.toLowerCase() && (el = next)
                        return el;
                    })
                }
            } else {
                const res = state.data.filter(el => el.toLowerCase() === action.payload.toLowerCase())
                if (!res.length) {
                    state.data.push(action.payload)
                }
            }
        },
        DestrWord(state, action) {
            state.data = state.data.filter(el => el.toLowerCase() !== action.payload.toLowerCase())
        }
    }
})

export const { DestrWord , AddSome } = DataDel.actions;

export default DataDel.reducer;