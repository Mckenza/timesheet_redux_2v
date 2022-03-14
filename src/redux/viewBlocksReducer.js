import { CLOSE_ADD_MONTH, CLOSE_FORM_ADD, OPEN_ADD_MONTH, OPEN_FORM_ADD } from "./types"

const initState = {
    viewAddForm: false,
    viewAddMonth: false,
}

export const viewBlocksReducer = (state = initState, action) => {
    switch (action.type) {
        case OPEN_FORM_ADD:
            return { viewAddForm: true, viewAddMonth: false };
        case CLOSE_FORM_ADD:
            return { viewAddForm: false, viewAddMonth: false };
        case OPEN_ADD_MONTH:
            return { viewAddForm: false, viewAddMonth: true };
        case CLOSE_ADD_MONTH:
            return { viewAddForm: false, viewAddMonth: false };
        default:
            return state;
    }
}