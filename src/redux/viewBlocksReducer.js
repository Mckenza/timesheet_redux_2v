import { CLOSE_FORM_ADD, OPEN_FORM_ADD } from "./types"

const initState = {
    viewAddForm: false,
}

export const viewBlocksReducer = (state = initState, action) => {
    switch(action.type){
        case OPEN_FORM_ADD:
            return { viewAddForm: true};
        case CLOSE_FORM_ADD:
            return {viewAddForm: false};
        default:
            return state;
    }
}