import { combineReducers } from "redux";
import { listReducer } from "./listReducer";
import monthsReducer from "./monthsReducer";
import calendarReducer from "./redux_for_calendar/calendarReducer";
import { viewBlocksReducer } from "./viewBlocksReducer";

export const rootReducer = combineReducers({
    listEmpl: listReducer,
    viewBlocks: viewBlocksReducer,
    listMonth: monthsReducer,
    calendar: calendarReducer,
})