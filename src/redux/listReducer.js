import { ADD_ITEM_LIST, LOAD_ITEMS_LIST, REMOVE_ITEM_LIST } from "./types";

const initState = [];

export const listReducer = (state = initState, action) => {
    switch(action.type){
        case ADD_ITEM_LIST:
            return [...state, action.payload];
        case REMOVE_ITEM_LIST:
            return state.filter(item => item.id !== action.payload);
        case LOAD_ITEMS_LIST:
            return [...action.payload];
        default:
            return state;
    }
}