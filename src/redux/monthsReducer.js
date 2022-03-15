import { DELETE_MONTH, LOAD_MONTHS, SAVE_MONTH } from "./types";

const initState = {};

/*
    payload ===>> {
        date: {
            month: 0, //(январь)
            year: 2022
        },
        
        info: {
            day_1: {
                time_1: 8,
                time_2: 15,
                time_3: 13,
                .....
            }
            ......
            day_n: {
                .......
            }
        }
    }
*/

export default (state = initState, action) => {
    switch (action.type) {
        case SAVE_MONTH:
            return { ...state, [`${action.payload.date.year}-${action.payload.date.month}`]: action.payload.info}
        case DELETE_MONTH:
            return;
        case LOAD_MONTHS:
            return state;
        default:
            return state;
    }
}