import { createReducer, on } from "@ngrx/store";
import { decrement, increment, set } from "./counter.actions";

const initialState = 0

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, action) => state + action.value),
    on(decrement, (state) => state - 1),
    on(set, (state, action) => action.value)
)