import { getData, removeLocalStorage, saveAllData, saveLocalStorage } from "../components/local-storage/dataFromLocalStorage";
import { CLEAR_MONTHS, DELETE_MONTH, LOAD_MONTHS, SAVE_MONTH } from "./types";

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

export function deleteMonth({ id, idMonth }) {
    return dispatch => {
        try {
            const tableData = getData(`data_tables_empl_${id}`);
            delete tableData[idMonth];
            saveLocalStorage(`data_tables_empl_${id}`, tableData);

            dispatch({
                type: DELETE_MONTH,
                payload: {
                    idMonth,
                    id,
                }
            })

            console.log('Удаление календаря успешно');
        } catch (e) {
            console.log('удаление календаря неудачное', e);
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
            console.log('Загрузка календаря не успешна. id:' + id);
        }
    }
}

export function allDeleteTables(id) {
    return dispatch => {
        try {
            removeLocalStorage(`data_tables_empl_${id}`);

            dispatch({
                type: CLEAR_MONTHS,
                payload: id,
            });

            console.log('Очистка календарей удачна');
        } catch (e) {
            console.log('Очистка календарей неудачна', e);
        }

    }
}

