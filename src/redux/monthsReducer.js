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
            const name = `data_tables_empl_${action.payload.id}`;
            const bufObj = {
                [`${action.payload.date.year}-${action.payload.date.month}`]: action.payload.info,
            }
            return { ...state, [name]: { ...state[name], ...bufObj}};
        case DELETE_MONTH:
            return;
        case LOAD_MONTHS:
            return {...state, [`data_tables_empl_${action.payload.id}`]: action.payload.load}
        default:
            return state;
    }
}