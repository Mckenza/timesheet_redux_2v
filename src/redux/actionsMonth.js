import { getData, saveAllData } from "../components/local-storage/dataFromLocalStorage";
import { LOAD_MONTHS, SAVE_MONTH } from "./types";

export function saveMonth(data) {
    return dispatch => {
        try {
            const bufObj = {
                [`${data.date.year}-${data.date.month}`]: data.info,
            }
            saveAllData(`data_tables_empl_${data.id}`, bufObj);
            dispatch({
                type: SAVE_MONTH,
                payload: data,
            })

            console.log('Создание календаря успешно');
        } catch (e) {
            console.log('Создание календаря провалено', e);
        }
    }
}

export function loadMonths(id) {
    return dispatch => {
        try {
            const load = getData(`data_tables_empl_${id}`);
            dispatch({
                type: LOAD_MONTHS,
                payload: {
                    load,
                    id,
                }
            });

            console.log('Загрузка календаря успешна id:' + id);
        } catch (e) {
            console.log('Загрузка календаря не успешна. id:' + id)
        }
    }
}

