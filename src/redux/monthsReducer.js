import { CLEAR_MONTHS, DELETE_MONTH, LOAD_MONTHS, SAVE_MONTH } from "./types";

const initState = {};

export default (state = initState, action) => {
    switch (action.type) {
        case SAVE_MONTH:
            const name = `data_tables_empl_${action.payload.id}`;
            const bufObj = {
                [`${action.payload.date.year}-${action.payload.date.month}`]: action.payload.info,
            }
            return { ...state, [name]: { ...state[name], ...bufObj } };

        case DELETE_MONTH:
            const buff = { ...state[`data_tables_empl_${action.payload.id}`] };
            delete buff[action.payload.idMonth];
            return { ...state, [`data_tables_empl_${action.payload.id}`]: buff };

        case CLEAR_MONTHS:
            const buff_clear = { ...state };
            console.log(buff_clear, action);
            delete buff_clear[`data_tables_empl_${action.payload}`];
            console.log(buff_clear);
            return { ...buff_clear };

        case LOAD_MONTHS:
            return { ...state, [`data_tables_empl_${action.payload.id}`]: action.payload.load };

        default:
            return state;
    }
}