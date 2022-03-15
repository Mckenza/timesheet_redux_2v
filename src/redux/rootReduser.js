import { combineReducers } from "redux";
import { listReducer } from "./listReducer";
import monthsReducer from "./monthsReducer";
import { viewBlocksReducer } from "./viewBlocksReducer";

export const rootReducer = combineReducers({
    listEmpl: listReducer,
    viewBlocks: viewBlocksReducer,
    listMonth: monthsReducer,
})