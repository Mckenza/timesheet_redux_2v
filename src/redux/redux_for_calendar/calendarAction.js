import { getData } from "../../components/local-storage/dataFromLocalStorage"
import { CHANGE_ACTION, CHANGE_HOURS, CHANGE_TYPE_WORK, LOAD_ALL_DATA } from "../types";

export const loadAllAData = (id, month) => {
    return dispatch => {
        try {
            const infoEmpl = getData(`data_empl_num_${id}`);
            const infoTable = getData(`data_tables_empl_${id}`);
            const buffObj = {
                infoEmpl,
                dataMonth: infoTable[month],
            }

            dispatch({
                type: LOAD_ALL_DATA,
                payload: buffObj,
            });

            console.log('Загрузка данных успешна, id: ' + id);
        } catch (e) {
            console.log('Загрузка данных провалена, id: ' + id);
        }
    }
}

export const changeHours = hours => {
    return {
        type: CHANGE_HOURS,
        payload: hours,
    }
}

export const changeTypeWork = type => {
    return {
        type: CHANGE_TYPE_WORK,
        payload: type,
    }
}

export const changeAction = action => {
    return {
        type: CHANGE_ACTION,
        payload: action,
    }
}